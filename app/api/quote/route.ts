import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { getSupabaseAdmin } from '@/lib/supabase';

const MAX_PHOTOS = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_TOTAL_SIZE = 25 * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

export async function POST(request: NextRequest) {
  try {
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json(
        { error: 'Request must be multipart form data' },
        { status: 400 }
      );
    }

    const honeypot = formData.get('honeypot') as string | null;
    if (honeypot) {
      return NextResponse.json({
        success: true,
        message: 'Quote request received.',
        requestId: randomUUID(),
        photosReceived: 0,
      });
    }

    const name = formData.get('name') as string | null;
    const email = formData.get('email') as string | null;
    const phone = formData.get('phone') as string | null;
    const address = formData.get('address') as string | null;
    const serviceType = formData.get('serviceType') as string | null;
    const location = formData.get('location') as string | null;
    const urgency = formData.get('urgency') as string | null;
    const description = formData.get('description') as string | null;
    const photos = formData.getAll('photos') as File[];

    if (!name || !description) {
      return NextResponse.json(
        { error: 'Name and job description are required' },
        { status: 400 }
      );
    }

    if (!phone && !email) {
      return NextResponse.json(
        { error: 'Please enter a phone number or email so we can contact you' },
        { status: 400 }
      );
    }

    const validPhotos = photos.filter((f) => f.size > 0);

    if (validPhotos.length > MAX_PHOTOS) {
      return NextResponse.json(
        { error: `Maximum ${MAX_PHOTOS} photos allowed` },
        { status: 400 }
      );
    }

    let totalSize = 0;
    for (const photo of validPhotos) {
      if (!ALLOWED_TYPES.includes(photo.type)) {
        return NextResponse.json(
          { error: `File type "${photo.type}" is not allowed. Upload JPEG, PNG, WebP, or GIF images.` },
          { status: 400 }
        );
      }
      if (photo.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `A photo exceeds the 10 MB size limit.` },
          { status: 400 }
        );
      }
      totalSize += photo.size;
    }
    if (totalSize > MAX_TOTAL_SIZE) {
      return NextResponse.json(
        { error: 'Total upload size exceeds the 25 MB limit.' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdmin();
    const businessId = process.env.TP_BUSINESS_ID;
    if (!businessId) {
      console.error('TP_BUSINESS_ID not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // --- All-or-nothing submission ---

    const { data: quoteRecord, error: insertError } = await supabase
      .from('tpe_estimates')
      .insert({
        business_id: businessId,
        status: 'needs_review',
        source: 'website_quote',
        customer_name: name,
        customer_phone: phone || '',
        customer_email: email || '',
        job_address: address || '',
        service_type: serviceType || 'unknown',
        location: location || 'unknown',
        urgency: urgency || 'unknown',
        description,
      })
      .select('id')
      .single();

    if (insertError || !quoteRecord) {
      console.error('Estimate insert failed:', insertError?.message);
      return NextResponse.json(
        { error: 'We couldn\'t save your request. Please try again or call us directly.' },
        { status: 500 }
      );
    }

    const estimateId = quoteRecord.id;
    const uploadedPaths: string[] = [];

    if (validPhotos.length > 0) {
      let uploadFailed = false;

      for (const photo of validPhotos) {
        const safeName = photo.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        const storagePath = `${businessId}/${estimateId}/${randomUUID()}_${safeName}`;
        const buffer = Buffer.from(await photo.arrayBuffer());

        const { error: uploadError } = await supabase.storage
          .from('tpe-estimate-photos')
          .upload(storagePath, buffer, {
            contentType: photo.type,
            upsert: false,
          });

        if (uploadError) {
          console.error('Photo upload failed:', uploadError.message);
          uploadFailed = true;
          break;
        }

        uploadedPaths.push(storagePath);
      }

      if (uploadFailed) {
        await rollback(supabase, estimateId, uploadedPaths);
        return NextResponse.json(
          { error: 'We couldn\'t upload your photos. Please try again or call us directly.' },
          { status: 500 }
        );
      }

      const photoRecords = uploadedPaths.map((path, i) => ({
        estimate_id: estimateId,
        storage_path: path,
        original_filename: validPhotos[i].name,
        mime_type: validPhotos[i].type,
        file_size: validPhotos[i].size,
      }));

      const { error: photoInsertError } = await supabase
        .from('tpe_estimate_photos')
        .insert(photoRecords);

      if (photoInsertError) {
        console.error('Photo records insert failed:', photoInsertError.message);
        await rollback(supabase, estimateId, uploadedPaths);
        return NextResponse.json(
          { error: 'We couldn\'t save your request. Please try again or call us directly.' },
          { status: 500 }
        );
      }

      await supabase
        .from('tpe_estimates')
        .update({ include_photos: true })
        .eq('id', estimateId);
    }

    console.log('Estimate saved:', {
      estimateId,
      serviceType: serviceType || 'unknown',
      urgency: urgency || 'unknown',
      photosUploaded: uploadedPaths.length,
      source: 'website_quote',
    });

    return NextResponse.json({
      success: true,
      message: 'Quote request received. We will contact you within 2 hours.',
      requestId: estimateId,
      photosReceived: uploadedPaths.length,
    });
  } catch (error) {
    console.error('Quote API error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}

async function rollback(
  supabase: ReturnType<typeof getSupabaseAdmin>,
  estimateId: string,
  uploadedPaths: string[],
) {
  if (uploadedPaths.length > 0) {
    const { error } = await supabase.storage
      .from('tpe-estimate-photos')
      .remove(uploadedPaths);
    if (error) console.error('Rollback: storage delete failed:', error.message);
  }

  const { error: deleteError } = await supabase
    .from('tpe_estimates')
    .delete()
    .eq('id', estimateId);
  if (deleteError) console.error('Rollback: estimate delete failed:', deleteError.message);
}
