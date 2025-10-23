import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  return NextResponse.json({
    server: 'sample-nextjs-app',
    timestamp: new Date().toISOString(),
    framework: 'Next.js',
    runtime: 'edge',
    platform: 'serverless',
    note: 'Edge runtime - limited Node.js APIs available'
  })
}
