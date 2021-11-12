import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LocaleSwitch from '@/components/LocaleSwitch'
import PageTitle from '@/components/PageTitle'

const Home: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  return (
    <>
      <PageTitle title={t('home')} />
      <div className="flex flex-col items-center pt-6">
        <LocaleSwitch />
        <div>Hello World!</div>
        <Image src="/images/logo.png" alt="logo" width="100" height="100" />
        <Link href="/about" passHref>
          <div>About</div>
        </Link>
      </div>
    </>
  )
}

type StaticProps = {
  locale: string
}
export const getStaticProps = async ({ locale }: StaticProps) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
