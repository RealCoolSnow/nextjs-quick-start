import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { ReactElement } from 'react'
import LocaleSwitch from '../LocaleSwitch'
import NavBar from './NavBar'

// Header
const Header = () => {
  return (
    <Head>
      <meta name="description" content="nextjs-quick-start" />
      <link rel="icon" href="/favicon.ico" />
      <title>nextjs-quick-start</title>
    </Head>
  )
}
// Footer
const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <footer className="w-full text-center absolute bottom-1">
      <p className="text-sm text-gray-500">{t('footer.description')}</p>
    </footer>
  )
}
// Layout
type Props = {
  children: ReactElement
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>
        <div className="text-right">
          <LocaleSwitch />
        </div>
        <div className="mt-6">
          <NavBar />
        </div>
        <div className="mt-6">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout

export { Header, Footer }
