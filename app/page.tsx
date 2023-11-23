import Home from '@/components/Home'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const checkParamEmpty = (title: any) => !!title ? title : null
  const title1 = checkParamEmpty(searchParams.title1) ?? "세 줄.......?!"
  const title2 = checkParamEmpty(searchParams.title2) ?? "미리보기 🤔"
  const title3 = checkParamEmpty(searchParams.title3) ?? "✨생성기✨ 🤗"
  const ogImageParams = new URLSearchParams({
    title1: title1,
    title2: title2,
    title3: title3
  });
  const VERCEL_URL = process.env.VERCEL_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL
  const host = `https://${VERCEL_URL}`
  const ogImageUrl = `${host}/api/param?${ogImageParams.toString()}`


  return {
    title: 'Three line OG Generator',
    description: '세 줄 미리보기 생성기',
    openGraph: {
      type: "article",
      title: "Three line OG Generator",
      description: '세 줄 미리보기 생성기',
      images: ogImageUrl
    },
    twitter: {
      card: "summary_large_image",
      title: "Three line OG Generator",
      description: '세 줄 미리보기 생성기',
      images: ogImageUrl
    }
  }
}


export default function Page() {
  return <Home />
}