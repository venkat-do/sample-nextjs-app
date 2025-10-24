import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    server: 'sample-nextjs-app',
    timestamp: new Date().toISOString(),
    framework: 'Next.js',
    // runtime: 'edge',
    platform: 'serverless',
  })
}
