import 'tailwindcss/tailwind.css'
import '../styles/main.css'
import '../styles/hamburgers.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../components/layouts'
import { mobileScreen } from '../hooks/useWindowSize'
import { AppWrapper } from '../context/state';

function MyApp({ Component, pageProps }) {
  const isMobileSize = mobileScreen()
  return (
    <>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} mobileScreen={isMobileSize} />
        </Layout>
      </AppWrapper>
    </>
  )
}

export default MyApp
