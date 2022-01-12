import Head from "../components/common/Head";
import About from "../components/about/About";
import Banner from "../components/Banner";
import Client from "../components/client/Client";
import Project from "../components/project/Project";
import Service from "../components/service/Service";
import Testimonial from "../components/testimonial/Testimonial";
import { client } from "../hooks/getData"

export default function Home(props) {
  return (
    <div className="">
      <Head title={props.pageInfo.metadata.metaTitle} description={props.pageInfo.metadata.mataDescription} />
      <Banner {...props} />
      <Service {...props.serviceSection} {...props.introductionSection} />
      <About withButton={true} {...props.aboutSection} />
      <Client {...props} />
      <Project {...props.ctaBreakSection} />
      <Testimonial title={props.testimonialSection.sectionTitle} testimonials={props.testimonialSection.testimonials} />
    </div>
  );
}

export async function getStaticProps(context) {
  // ----------------- Data Fetching --------------------
  const lang = context.locale
  const props = await client.fetch(
    `*[_type =='home' && pageInfo.lang->language == $lang][0]{
      ..., 
      aboutSection->,
      clientSection{...,clients[]-> }, 
      ctaBreakSection->,
      pageInfo{...,lang->},
      serviceSection->,
      testimonialSection{...,
        testimonials[]->{
          ...,
          content[language->language == $lang]{
            ...,
          }
        }}
}`, { lang })

  return { props: props }
}