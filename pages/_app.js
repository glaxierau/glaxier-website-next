import Layout from '../components/layouts'
import { Provider } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import store from '../redux/store'
import NextNProgress from "nextjs-progressbar";
import 'tailwindcss/tailwind.css'
import '../styles/main.css'
import '../styles/hamburgers.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FetcherUI } from '../helper/fetcher';
import Cookie from '../components/CookieConsent';
import { cookieConsentValue } from '../helper/functions';


function MyApp(props,) {
  const { Component, pageProps, router } = props
  const tagManagerArgs = {
    // gtmId: 'GTM-TMQD58L'
  }
  // const cookieConsent = cookieConsentValue()
  // if (typeof window !== 'undefined') {
  //   if (!cookieConsent) {
  //     null
  //   } else {
  //     TagManager.initialize(tagManagerArgs)
  //   }
  // }
  return (
    <>
      <Provider store={store}>
        <FetcherUI lang={router.locale} />
        <NextNProgress color="#9FB0E4" height={4} options={{ showSpinner: false }} />
        <AnimatePresence key={router.route} exitBeforeEnter={true} initial={true}>
          <section className={router.locale}>
            <Layout>
              <Component {...pageProps} />
              <Cookie />
            </Layout>
          </section>
        </AnimatePresence>
      </Provider>
    </>
  )
}

export default MyApp
