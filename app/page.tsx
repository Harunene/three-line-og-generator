"use client"

import { Button } from "@/components/ui/button"
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Share2Icon, TwitterLogoIcon } from '@radix-ui/react-icons'

import Image from "next/image"
import Head from 'next/head'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { useState } from 'react'
import { useThrottle } from '@/lib/useThrottle.js'

export default function Home() {
  
  
  const { toast } = useToast()

  const searchParams = useSearchParams();
  const checkParamEmpty = (title: any) => !!title ? title : null
  const [title1, setTitle1] = useState(checkParamEmpty(searchParams.get("title1")) ?? "세 줄.......?!")
  const [title2, setTitle2] = useState(checkParamEmpty(searchParams.get("title2")) ?? "미리보기 🤔")
  const [title3, setTitle3] = useState(checkParamEmpty(searchParams.get("title3")) ?? "✨생성기✨ 🤗")

  const host = process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : "http://localhost:3000"

  const params = new URLSearchParams({
    title1: title1,
    title2: title2,
    title3: title3
  });

  const pageUrl = `${host}/?${params.toString()}`
  const ogImageUrl = `${host}/api/param?${params.toString()}`

  const throttledImageUrl = useThrottle(ogImageUrl, 500);

  return (
    <>
      <Head>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="." />
        <meta property="og:description" content="Three line og generator" />
        <meta property="og:image" content={throttledImageUrl} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:widgets:new-embed-design" content="on"/>
        <meta name="twitter:widgets:csp" content="on"/>
        <meta name="msapplication-TileColor" content="#2d89ef"/>
        <meta name="theme-color" content="#2aa3ef"/>
      </Head>
      <div className="flex h-screen">
        <div className="w-[350px] m-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">세 줄 미리보기 생성기</CardTitle>
              <CardDescription>
              별건없고 세 줄 미리보기를 이쁘게 만들어줍니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2 relative h-40">
                <Card>
                <Image src={throttledImageUrl} 
                  fill priority
                  alt="미리보기" 
                  style={{objectFit: "contain"}} 
                  sizes="350px" 
                  className="p-1"
                />
                </Card>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="title1">첫째 줄</Label>
                <Input id="title1" type="text" placeholder="세 줄" value={title1} enterKeyHint="next" onChange={(e) => setTitle1(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="title2">둘째 줄</Label>
                <Input id="title2" type="text" placeholder="미리보기" value={title2} enterKeyHint="next" onChange={(e) => setTitle2(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="title3">셋째 줄</Label>
                <Input id="title3" type="text" placeholder="생성기" value={title3} enterKeyHint="done" onChange={(e) => setTitle3(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                onClick={() => {
                  navigator.clipboard.writeText(pageUrl)
                  toast({
                    title: "클립보드에 복사되었습니다!",
                    description: "미리보기를 SNS에 자랑?해보세요 🤔",
                  })
                }}
              >
                <Share2Icon className="mr-2 h-4 w-4" /> 링크 만들기
              </Button>
            </CardFooter>
          </Card>

          <div className="flex justify-center items-center text-sm space-x-2 text-muted-foreground h-10">
            <TwitterLogoIcon />
            &nbsp;or 𝕏 :
            <Link href="http://twitter.com/harunene">@harunene</Link>
          </div>
        </div>
      </div>
    </>
  )
}
