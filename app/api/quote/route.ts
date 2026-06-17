import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get('name') as string | null;
    const email = formData.get('email') as string | null;
    const phone = formData.get('phone') as string | null;
    const address = formData.get('address') as string | null;
    const serviceType = formData.get('serviceType') as string | null;
    const location = formData.get('location') as string | null;
    const urgency = formData.get('urgency') as string | null;
    const description = formData.get('description') as string | null;
    const photos = formData.getAll('photos') as File[];

    if (!name || !email || !phone || !address || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const photoSummary = photos
      .filter((f) => f.size > 0)
      .map((f) => ({ name: f.name, size: f.size, type: f.type }));

    console.log('Quote Request Received:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      address,
      serviceType,
      location,
      urgency,
      description,
      photos: photoSummary,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Quote request received. We will contact you within 2 hours.',
        photosReceived: photoSummary.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Quote API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process quote request' },
      { status: 500 }
    );
  }
}
