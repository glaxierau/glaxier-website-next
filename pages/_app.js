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
import useSWR from 'swr';
import axios from 'axios';


function MyApp(props,) {
  const { Component, pageProps, router } = props
  const fetcher = (url) => axios.get(url).then(res => res.data)
  const { data, error } = useSWR(`/api/navigation?lang=${router.locale}`, fetcher)
  return (
    <>
      <Provider store={store}>
        <NextNProgress color="#9FB0E4" height={4} options={{ showSpinner: false }} />
        <AnimatePresence key={router.route} exitBeforeEnter={true} initial={true}>
          <section className={router.locale}>
            <Layout nav={data}>
              <Component {...pageProps} />
            </Layout>
          </section>
        </AnimatePresence>
      </Provider>
    </>
  )
}

export default MyApp
