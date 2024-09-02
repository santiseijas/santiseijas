import Header from '../components/header'
import Layout from '../components/layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
