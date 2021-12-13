import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageTitle from '@/components/common/PageTitle'
import Counter from '@/components/Counter'
import { helloGet2 } from '@/api/common'

const Home: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const httpTest = () => {
    helloGet2()
      .then((res) => {
        console.log('helloGet2', res)
      })
      .catch((err) => {
        console.log('helloGet2 err', err)
      })
  }
  return (
    <>
      <PageTitle title={t('home')} />
      <div className="flex flex-col items-center">
        <Image src="/images/logo.png" alt="logo" width="100" height="100" />
        <div
          className="mt-8 mb-2 btn bg-blue-500 text-white shadow-xl shadow-blue-500/50 rounded-full py-2 w-32 text-center"
          onClick={httpTest}
        >
          Http Test
        </div>
        <Counter />
      </div>
    </>
  )
}

type StaticProps = {
  locale: string
}
export const getStaticProps = async ({ locale }: StaticProps) => {
  console.log(locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home
