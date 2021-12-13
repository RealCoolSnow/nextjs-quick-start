import { NextPage } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import PageTitle from '@/components/common/PageTitle'
import styles from './index.module.css'

const About: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <PageTitle title={t('about')} />
      <div className="flex flex-col items-center">
        <div className={styles.textContent}>{t('about_page_desc')}</div>
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

export default About
