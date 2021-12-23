import Head from "../components/common/Head";
import About from "../components/about/About";
import Banner from "../components/Banner";
import Client from "../components/client/Client";
import Project from "../components/project/Project";
import Service from "../components/service/Service";
import Articles from "../components/articles/Articles";
import Testimonial from "../components/testimonial/Testimonial";
import { getData } from "../hooks/getData";
import articles from '../config/articles'

export default function Home(props) {
  return (
    <div className="container-snap">
      <Head title={props.pageInfo.metadata.metaTitle} description={props.pageInfo.metadata.mataDescription} />
      <Banner {...props} />
      <Service {...props.serviceSection} {...props.introductionSection} />
      <About withButton={true} {...props.aboutSection} />
      <Client {...props} />
      <Project {...props.ctaBreakSection} />
      <Testimonial testimonials={props.testimonialSection.testimonials} />
      {/* <Articles latestArticles={articles} /> */}
    </div>
  );
}

export const getServerSideProps = async (req, res) => {

  // ----------------- Data Fetching --------------------
  let lang = req.locale
  let language = await getData(`*[_type == 'languageOption' && language == '${lang}']{_id}[0]`)
  language = language._id

  const data = await getData(
    `*[_type =='home' && pageInfo.lang._ref == "${language}"][0]{
      ..., 
      aboutSection->,
      clientSection{...,clients[]-> }, 
      ctaBreakSection->,
      pageInfo{lang->,...},
      serviceSection->,
      testimonialSection{...,testimonials[]->}}`)

  return {
    props: data
  }
}