import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

const font = fetch(new URL('../../assets/NotoSansCJKtc-Bold.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const fontData = await font;

    const title1 = searchParams.has('title1') ? searchParams.get('title1')?.slice(0, 100) : ''
    const title2 = searchParams.has('title2') ? searchParams.get('title2')?.slice(0, 100) : ''
    const title3 = searchParams.has('title3') ? searchParams.get('title3')?.slice(0, 100) : ''

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'white',
            fontSize: 100,
            letterSpacing: -2,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '5px 40px',
              width: 'auto',
              textAlign: 'center',
              backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
              backgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'Noto Sans CJK TC Bold',
            }}
          >
            {title1}
          </div>
          <div
            style={{
              padding: '5px 40px',
              width: 'auto',
              textAlign: 'center',
              backgroundImage: 'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
              backgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'Noto Sans CJK TC Bold',
            }}
          >
            {title2}
          </div>
          <div
            style={{
              padding: '5px 40px',
              width: 'auto',
              textAlign: 'center',
              backgroundImage: 'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
              backgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'Noto Sans CJK TC Bold',
            }}
          >
          {title3}
          </div>
        </div>

      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Noto Sans CJK TC Bold',
            data: fontData,
            style: 'normal',
          }
        ]
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
