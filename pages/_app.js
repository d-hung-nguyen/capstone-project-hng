import GlobalStyle from "../styles"
import Layout from '../components/layout'
import { Lato } from 'next/font/google'
 
const lato =Lato({
  weight: '400',
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}