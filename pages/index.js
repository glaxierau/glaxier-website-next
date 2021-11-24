import { motion } from "framer-motion";
import Head from "next/head";
import About from "../components/about/About";
import Animate from "../components/animation/Animate";
import Articles from "../components/articles/Articles";
import Banner from "../components/Banner";
import Client from "../components/client/Client";
import Project from "../components/project/Project";
import Service from "../components/service/Service";
import Testimonial from "../components/testimonial/Testimonial";

export default function Home({ latestArticles }) {
  return (
    <div>
      <Head>
        <title>Home | Glaxier</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Banner />
      <Service />
      <About withButton={true} />
      <Client />
      <Project />
      <Testimonial />
      <Articles latestArticles={latestArticles} />
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = require('../config/articles')
  const latestArt = res.default.length
  const lastThreeIndex = latestArt - 3
  const latestArticles = res.default.splice(lastThreeIndex, latestArt)
  return { latestArticles }
}
