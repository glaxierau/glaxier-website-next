import React from 'react'
import { useSelector } from 'react-redux'
import AboutSection from '../../components/about/About'
import ProjectSection from '../../components/project/Project'
import SectionTitle from '../../components/common/SectionTitle'
import Title from '../../components/Title'
import TeamBadge from '../../components/icons/TeamBadge'
import SectionHead from '../../components/common/Head'
import AboutToggle from '../../components/about/AboutToggle'
import { getData } from '../../hooks/getData'
import { upperCaseText } from '../../hooks/tools'
import SlideIn from '../../components/animation/SlideIn'

const About = (props) => {
    const { pageInfo, headerSection, ctaBreakSection, teamSection } = props
    return (
        <div className="scroll-smooth xl:snap-y lg:snap-y snap-none snap-mandatory xl:h-screen lg:h-screen h-auto w-screen overflow-y-scroll">
            <SectionHead title={pageInfo.metadata.metaTitle} description={pageInfo.metadata.mataDescription} />
            <div className="py-2 snap-start">
                <SectionTitle title={upperCaseText(headerSection.title)} description={headerSection.subtitle} />
            </div >
            <div className="lg:mt-0 -mt-10" id="whoweare">
                <AboutSection {...props.aboutSection} />
            </div>
            <div className="bg-white-dark py-20 snap-start" id="industry-experience">
                <Title title="Industry Experience" lineWidth={600} height={30} />
                <AboutToggle {...props} />
            </div>
            <ProjectSection {...ctaBreakSection} />
            <div className="lg:py-20 py-10 snap-end" id="team">
                <Title title={teamSection.title} lineWidth={220} />
                <div y={5} className="flex flex-wrap p-4 py-10 lg:px-5 md:px-2 px-4 mx-auto justify-around items-center w-4/5">
                    {teamSection.teamMembers.map(({ _id, content, image }) => <TeamBadge key={_id} name={content.name} position={content.position} image={image} />)}
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async (req, res) => {

    // ----------------- Data Fetching --------------------
    let lang = req.locale
    let language = await getData(`*[_type == 'languageOption' && language == '${lang}']{_id}[0]`)
    language = language._id

    const data = await getData(
        `*[_type == 'about' && pageInfo.lang._ref == '${language}'][0]{
            ...,
            aboutSection->,
            ctaBreakSection->,
            "content": industrySection[]->{industry->,content[0],... },
            teamSection{...,teamMembers[]->{...,content[0]}}
          }`)

    return {
        props: data
    }
}

export default About

