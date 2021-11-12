import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import styles from './index.module.css'

const NavBar = () => {
  const { t } = useTranslation('common')
  return (
    <div className="w-full py-2 text-center">
      <Link href="/">
        <a className={styles.link}>{t('home')}</a>
      </Link>
      <Link href="/about">
        <a className={styles.link}>{t('about')}</a>
      </Link>
    </div>
  )
}

export default NavBar
