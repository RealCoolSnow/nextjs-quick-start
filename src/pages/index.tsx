import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LocaleSwitch from '@/components/LocaleSwitch'
import PageTitle from '@/components/common/PageTitle'
import Counter from '@/components/Counter'

const Home: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  return (
    <>
      <PageTitle title={t('home')} />
      <div className="flex flex-col items-center">
        <LocaleSwitch />
        <div className="mt-4"></div>
        <Counter />
        <div className="mt-4"></div>
        <Image src="/images/logo.png" alt="logo" width="100" height="100" />
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
