import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { LocaleSwitch } from '../components/LocaleSwitch'

const Home: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  return (
    <>
      <Header title={t('home')}></Header>
      <main>
        <div className="flex flex-col items-center pt-6">
          <LocaleSwitch />
          <div>Hello World!</div>
          <Image src="/vercel.svg" alt="logo" width="80" height="40" />
          <Link href="/about" passHref>
            <div>About</div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

type StaticProps = {
  locale: string
}
export const getStaticProps = async ({ locale }: StaticProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'])),
  },
})

export default Home
