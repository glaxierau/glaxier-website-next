import { useSelector } from 'react-redux'
import Head from "next/head";
import About from "../components/about/About";
import Banner from "../components/Banner";
import Client from "../components/client/Client";
import Project from "../components/project/Project";
import Service from "../components/service/Service";
import Articles from "../components/articles/Articles";
import Testimonial from "../components/testimonial/Testimonial";
import { getData } from "../hooks/getData";
import articles from '../config/articles'

export default function Home() {
  const { data } = useSelector(state => state.data)
  const { hero, clientSection, ctaBreakSection, testimonial } = data
  return (
    <div className="container-snap">
      <Head>
        <title>Home | Glaxier</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Banner {...hero} />
      <Service />
      <About withButton={true} />
      <Client {...clientSection} />
      <Project {...ctaBreakSection} />
      <Testimonial testimonials={testimonial} />
      <Articles latestArticles={articles} />
    </div>
  );
}
