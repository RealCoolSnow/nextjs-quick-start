import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.css'

type Props = {
  title: string
  path: string
}
const MyLink = (props: Props) => {
  const router = useRouter()
  return (
    <Link href={props.path}>
      <a
        className={`${styles.link} ${
          router.pathname == props.path ? styles.linkActive : ''
        }`}
      >
        {props.title}
      </a>
    </Link>
  )
}

const NavBar = () => {
  const { t } = useTranslation('common')
  return (
    <div className="w-full py-2 text-center">
      <MyLink title={t('home')} path="/" />
      <MyLink title={t('about')} path="/about" />
    </div>
  )
}

export default NavBar
