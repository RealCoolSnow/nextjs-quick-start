import { NextPage } from 'next'
import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

const About: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Header title={t('about')}></Header>
      <main>
        <div className="flex flex-col items-center">
          <div>This is about page</div>
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

export default About
