import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import Head from "next/head";
import About from "../components/about/About";
import Banner from "../components/Banner";
import Client from "../components/client/Client";
import Project from "../components/project/Project";
import Service from "../components/service/Service";
import Testimonial from "../components/testimonial/Testimonial";
import { getData } from "../hooks/getData";

export default function Home({ hero, services, serviceMap, aboutSection, about }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'GET_SERVICES', serviceMap, services });
    dispatch({ type: 'GET_ABOUT', about })
  }, [services && serviceMap])

  console.log(about)

  return (
    <div className="container-snap">
      <Head>
        <title>Home | Glaxier</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Banner {...hero} />
      <Service />
      <About withButton={true} />
      <Client />
      <Project />
      <Testimonial />
      {/* <Articles latestArticles={latestArticles} /> */}
    </div>
  );
}


export const getServerSideProps = async (ctx) => {
  // --------------------- Queries --------------------------
  const heroQuery = `*[_type =='home']{hero}[0]`
  const serviceQuery = `*[_type =='services'][0]`
  const serviceMapQuery = `*[_type == 'serviceMap'][0]`
  const aboutQuery = `*[_type == 'about'][0]`

  // ----------------- Data Fetching --------------------
  const serviceMap = await getData(serviceMapQuery)
  const services = await getData(serviceQuery)
  const { hero } = await getData(heroQuery)
  const about = await getData(aboutQuery)
  return {
    props: {
      hero,
      serviceMap,
      services,
      about,
    }
  }
}