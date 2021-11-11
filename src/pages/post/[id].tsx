import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'

type PostData = {
  context: string
  title: string
}
const PostPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    console.log(`Post Page loaded`)
    console.log('env=', process.env.NEXT_PUBLIC_BASE_URL)
    router.push('/post/10', undefined, { shallow: true })
  }, [])
  useEffect(() => {
    console.log('post id = ', router.query.id)
  }, [router.query.id])
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('script loaded')
        }}
        nonce="abc"
        data-Hello="world"
      />
      <Image src="/images/logo.png" width={100} height={100} />
      <Link href="/post/abc/223">page all</Link>
      <div
        onClick={() => {
          router.push('/post/abc/223')
        }}
      >
        page all btn
      </div>
      <div className="text-red-500">Post Page {id}</div>
      <h1 className="mt-2 font-bold text-lg">{data.title}</h1>
      <h5 className="mt-2" style={{ fontSize: '12px' }}>
        {data.content}
      </h5>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://www.joy666.cn/wxapi/user/info?app=qq_jichou')
  const post = await res.text()
  if (!post) {
    // return { notFound: true }
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const data = { content: post, title: 'test title' }
  return {
    props: {
      data,
    },
  }
}
export default PostPage
