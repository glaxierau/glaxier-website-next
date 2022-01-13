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


function MyApp(props,) {
  const { Component, pageProps, router } = props

  return (
    <>
      <Provider store={store}>
        <FetcherUI lang={router.locale} />
        <NextNProgress color="#9FB0E4" height={4} options={{ showSpinner: false }} />
        <AnimatePresence key={router.route} exitBeforeEnter={true} initial={true}>
          <section className={router.locale}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </section>
        </AnimatePresence>
      </Provider>
    </>
  )
}

export default MyApp
