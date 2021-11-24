import 'tailwindcss/tailwind.css'
import '../styles/main.css'
import '../styles/hamburgers.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../components/layouts'
import { AnimatePresence, motion } from 'framer-motion'
import NextNProgress from "nextjs-progressbar";


function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <NextNProgress color="#9FB0E4" height={4} options={{ showSpinner: false }} />
      <AnimatePresence key={router.route} exitBeforeEnter={true} initial={true}>
        <Layout>
          <motion.div
            key={router.route}
            initial={{ y: 10, opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.4, staggerChildren: 0.3 }}>
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      </AnimatePresence>
    </>
  )
}

export default MyApp
