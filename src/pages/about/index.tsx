import { NextPage } from 'next'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import PageTitle from '@/components/common/PageTitle'
import styles from './index.module.css'

const About: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <PageTitle title={t('about')} />
      <div className="flex flex-col items-center">
        <div className={styles.textRed}>{t('about_page_desc')}</div>
      </div>
    </>
  )
}

export default About
