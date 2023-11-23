import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

import Preview from '@/components/Preview'

export const runtime = "edge"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const title1 = searchParams.has('title1') ? searchParams.get('title1')?.slice(0, 100) ?? '' : ''
    const title2 = searchParams.has('title2') ? searchParams.get('title2')?.slice(0, 100) ?? '' : ''
    const title3 = searchParams.has('title3') ? searchParams.get('title3')?.slice(0, 100) ?? '' : ''

    return new ImageResponse(
      <Preview title1={title1} title2={title2} title3={title3} />
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
