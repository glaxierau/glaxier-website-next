import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
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
  const { hero, clientSection, ctaBreakSection, testimonial, client } = data
  if (data !== null) {
    return (
      <div className="container-snap">
        <Head>
          <title>Home | Glaxier</title>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <Banner {...hero} />
        <Service />
        <About withButton={true} />
        <Client {...clientSection} client={client} />
        <Project {...ctaBreakSection} />
        <Testimonial testimonials={testimonial} />
        {/* <Articles latestArticles={articles} /> */}
      </div>
    );
  }
}

export const getServerSideProps = async (req, res) => {
  // console.log(req.locales)

  const languageQuery = `pageInfo.lang == ''`

  const clientSectionQuery = `*[_type =='home']{clientSection}[0]`
  const heroQuery = `*[_type =='home']{hero}[0]`
  const ctaBreakSectionQuery = `*[_type == 'ctaBreakSection'][0]`
  const testimonialQuery = `*[ _type == 'testimonial']`

  // ----------------- Data Fetching --------------------
  const { hero } = await getData(heroQuery)
  const { clientSection } = await getData(clientSectionQuery)
  const ctaBreakSection = await getData(ctaBreakSectionQuery)
  const testimonial = await getData(testimonialQuery)

  return { props: { hero, clientSection, ctaBreakSection, testimonial } }
}