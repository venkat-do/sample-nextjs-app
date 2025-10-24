import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const headers = Object.fromEntries(request.headers.entries())

    return NextResponse.json({
      message: 'Echo response',
      receivedData: body,
      headers: headers,
      timestamp: new Date().toISOString(),
      // runtime: 'edge'
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Invalid JSON',
      message: 'Could not parse request body',
      timestamp: new Date().toISOString()
    }, { status: 400 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Echo endpoint - send POST request with JSON data',
    timestamp: new Date().toISOString(),
    // runtime: 'edge'
  })
}
