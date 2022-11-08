import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Page = (props: { title1: string, title2: string, title3: string }) => {

  const router = useRouter()
  
  return (
    <div>
      <Head>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content="." />
        <meta property="og:description" content="Three line og generator" />
        <meta
          property="og:image"
          content={
            // Because OG images must have a absolute URL, we use the
            // `VERCEL_URL` environment variable to get the deployment’s URL.
            // More info:
            // https://vercel.com/docs/concepts/projects/environment-variables
            `${
              process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
            }/api/param?title1=${props.title1}&title2=${props.title2}&title3=${props.title3}`
          }
        />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:widgets:new-embed-design" content="on"/>
        <meta name="twitter:widgets:csp" content="on"/>
        <meta name="msapplication-TileColor" content="#2d89ef"/>
        <meta name="theme-color" content="#2aa3ef"/>

      </Head>
      <h1>세줄 미리보기 생성기</h1>
      <h3>별건없고 세줄 미리보기를 이쁘게 만들어줍니다.</h3>
      <h3>
        twitter:&nbsp;
        <Link href="http://twitter.com/harunene">@harunene</Link>
      </h3>
    </div>
  )
}

Page.getInitialProps = context => {
  return context.query
};

export default Page;
