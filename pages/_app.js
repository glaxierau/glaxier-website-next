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
import { useSVGParser } from '../utils/parser';
import SVG from '../components/common/SVG';
import { useState } from 'react';


function MyApp(props,) {
  const { Component, pageProps, router } = props
  const url = 'https://cdn.sanity.io/images/a49e7mel/production/3e6b3336dbb7e54b0e16f3d393bc6f13d393845f-70x67.svg?w=2000&h=2000&fit=max'

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
