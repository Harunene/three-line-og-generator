import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

const Page = (props: { title1: string, title2: string, title3: string }) => {

  const router = useRouter();
  console.log(props)
  return (
    <div>
      <Head>
        <meta name="og:title" content="Vercel Edge Network" />
        <meta name="og:description" content="Vercel Edge Network" />
        <meta
          name="og:image"
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
      </Head>
      <h1>A page with Open Graph Image.</h1>
    </div>
  )
}

Page.getInitialProps = context => {
  return context.query
};

export default Page;