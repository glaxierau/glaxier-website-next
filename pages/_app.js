import { useState } from 'react';
import Layout from '../components/layouts'
import { Provider } from 'react-redux'
// import { createWrapper } from 'next-redux-wrapper'
import { AnimatePresence, motion } from 'framer-motion'
import store from '../redux/store'
import NextNProgress from "nextjs-progressbar";
import Fetcher from '../components/Fetcher';
import 'tailwindcss/tailwind.css'
import '../styles/main.css'
import '../styles/hamburgers.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Provider store={store}>
        <NextNProgress color="#9FB0E4" height={4} options={{ showSpinner: false }} />
        <AnimatePresence key={router.route} exitBeforeEnter={true} initial={true}>
          <section className={router.locale}>
            <Layout>
              <motion.div
                key={router.route}
                initial={{ y: 2, opacity: 0.8 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 2, opacity: 0 }}
                transition={{ duration: 0.4, staggerChildren: 0.3 }}
              >
                <Component {...pageProps} />
              </motion.div>
            </Layout>
          </section>
        </AnimatePresence>

      </Provider>
    </>
  )
}

export default MyApp
