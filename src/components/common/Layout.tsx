import { ReactElement } from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children: ReactElement
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
