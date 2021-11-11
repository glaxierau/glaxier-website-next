import Head from "next/head";
import About from "../components/about/About";
import Articles from "../components/articles/Articles";
import Banner from "../components/Banner";
import Client from "../components/client/Client";
import Project from "../components/project/Project";
import Service from "../components/service/Service";
import Testimonial from "../components/testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Glaxier</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Banner />
      <Service />
      <About />
      <Client />
      <Project />
      <Testimonial />
      <Articles />
    </div>
  );
}
