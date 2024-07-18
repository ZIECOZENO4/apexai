import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received request with body:', body);

    // Update the backend URL to the deployed FastAPI backend URL
    const backendUrl = process.env.FASTAPI_BACKEND_URL || 'http://127.0.0.1:8000';

    const response = await fetch(`${backendUrl}/api/compare-chart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log('Received response from backend:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
