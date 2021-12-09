import Head from "next/head";
import About from "../components/about/About";
import Banner from "../components/Banner";
import Client from "../components/client/Client";
import Project from "../components/project/Project";
import Service from "../components/service/Service";
import Testimonial from "../components/testimonial/Testimonial";
import { getData } from "../hooks/getData";

export default function Home({ hero }) {
  return (
    <div className="container-snap">
      <Head>
        <title>Home | Glaxier</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Banner {...hero} />
      {/* <Service /> */}
      <About withButton={true} />
      <Client />
      <Project />
      <Testimonial />
      {/* <Articles latestArticles={latestArticles} /> */}
    </div>
  );
}


export const getStaticProps = async (ctx) => {
  const heroQuery = `*[_type =='home']{hero}[0]`
  const { hero } = await getData(heroQuery)
  console.log(hero)
  // const result = await fetch(url).then(res => res.json())
  // const hero = result.result[0].hero
  return {
    props: {
      hero
    }
  }
}