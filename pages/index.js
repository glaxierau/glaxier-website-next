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
import absoluteUrl from 'next-absolute-url'

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

Home.getInitialProps = async ({ req, res }) => {
  const { origin } = absoluteUrl(req)
  const response = await fetch(`${origin}/api/blogs`).then(res => res.json())
  const latestArt = await response.length
  const lastThreeIndex = latestArt - 3
  const latestArticles = await response.splice(lastThreeIndex, latestArt)
  return { latestArticles }
}
