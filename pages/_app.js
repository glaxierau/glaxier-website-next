import 'tailwindcss/tailwind.css'
import '../styles/main.css'
import '../styles/hamburgers.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../components/layouts'
import { mobileScreen } from '../hooks/useWindowSize'

function MyApp({ Component, pageProps }) {
  const isMobileSize = mobileScreen()
  return (
    <>
      <Layout>
        <Component {...pageProps} mobileScreen={isMobileSize} />
      </Layout>
    </>
  )
}

export default MyApp
