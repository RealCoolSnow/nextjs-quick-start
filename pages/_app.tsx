import '@/styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { appWithTranslation } from 'next-i18next'

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
