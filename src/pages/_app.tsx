import '@/styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Layout from '@/components/common/Layout'
import { Provider } from 'react-redux'
import { store } from '@/store'

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default appWithTranslation(MyApp)
