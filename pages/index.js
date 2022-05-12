import Head from "../components/common/Head";
import About from "../components/about/About";
import Banner from "../components/Banner";
import Client from "../components/client/Client";
import Project from "../components/project/Project";
import Service from "../components/service/Service";
import Testimonial from "../components/testimonial/Testimonial";
import { getData } from "../hooks/getData"

export default function Home(props) {
  return (
    <div>
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

export async function getStaticProps(context) {
  // ----------------- Data Fetching --------------------
  const lang = context.locale
  const props = await getData(
    `*[_type =='home' && pageInfo.lang->language == '${lang}'][0]{
      ..., 
      aboutSection->,
      clientSection{...,clients[]-> }, 
      ctaBreakSection->,
      pageInfo{...,lang->},
      serviceSection->,
      testimonialSection{...,testimonials[]->{...,content[language->language == '${lang}']}}
    }`)

  return { props }
}