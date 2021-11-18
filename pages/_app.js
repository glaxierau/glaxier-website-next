import 'tailwindcss/tailwind.css'
import '../styles/main.css'
import '../styles/hamburgers.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../components/layouts'
import { AnimatePresence, motion } from 'framer-motion'
import Animate from '../components/animation/Animate';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Layout>
        <motion.div
          key={router.route}
          initial={{ y: 5, opacity: 0.2 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ duration: 0.4, staggerChildren: 0.3 }}>
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </>
  )
}

export default MyApp
