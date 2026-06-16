import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.phone || !data.jobDescription || !data.address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the quote request (in a real app, this would save to a database)
    console.log('Quote Request Received:', {
      timestamp: new Date().toISOString(),
      ...data,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Quote request received. We will contact you within 2 hours.',
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
