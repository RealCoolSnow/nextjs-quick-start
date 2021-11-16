import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
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
        <div
          className="mt-8 mb-2 btn bg-blue-500 text-white"
          onClick={httpTest}
        >
          Http Test
        </div>
        <Counter />
        <div className="mt-2"></div>
        <Image src="/images/logo.png" alt="logo" width="100" height="100" />
      </div>
    </>
  )
}

export default Home
