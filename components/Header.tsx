import Head from 'next/head'
import React from 'react'

type Props = {
  title: string
}
export const Header = ({ title }: Props) => {
  return (
    <Head>
      <title>{title} - nextjs-quick-start</title>
      <meta name="description" content="nextjs-quick-start" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
