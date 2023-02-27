import React from 'react'
import { useSelector } from 'react-redux'
import AboutSection from '../../components/about/About'
import ProjectSection from '../../components/project/Project'
import SectionTitle from '../../components/common/SectionTitle'
import Title from '../../components/Title'
import TeamBadge from '../../components/icons/TeamBadge'
import SectionHead from '../../components/common/Head'
import AboutToggle from '../../components/about/AboutToggle'
import { client, getData } from '../../hooks/getData'
import { upperCaseText } from '../../hooks/tools'
import { aboutQuery } from '../../sanity/pagesQuery'

const About = (props) => {
    const { pageInfo, headerSection, ctaBreakSection, teamSection } = props

    const TeamSection = (props) => {
        return teamSection.teamMembers.map(({ _id, content, image }) => (
            <TeamBadge
                key={_id}
                name={content.name}
                position={content.position}
                image={image}
            />
        ))
    }

    return (
        <div className="">
            <SectionHead
                title={pageInfo.metadata.metaTitle}
                description={pageInfo.metadata.mataDescription}
            />
            <div className="py-2 ">
                <SectionTitle
                    title={upperCaseText(headerSection.title)}
                    description={headerSection.subtitle}
                />
            </div>
            <div className="lg:mt-0 -mt-10" id="whoweare">
                <AboutSection {...props.aboutSection} />
            </div>
            <div
                className="bg-white-dark py-20 h-auto"
                id="industry-experience"
            >
                <Title
                    title="Industry Experience"
                    lineWidth={600}
                    height={30}
                />
                <AboutToggle {...props} />
            </div>
            <div className="h-auto">
                <ProjectSection {...ctaBreakSection} />
            </div>
            {/* team memeber section */}
            <div
                className="lg:py-20 py-10 h-auto flex flex-col justify-center items-center"
                id="team"
            >
                <Title title={teamSection.title} lineWidth={220} />
                <div
                    y={5}
                    className="flex flex-wrap p-4 py-20 lg:px-5 md:px-2 px-4 mx-auto justify-around items-center w-4/5"
                >
                    <TeamSection />
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async (req, res) => {
    // ----------------- Data Fetching --------------------
    let lang = req.locale
    const props = await client.fetch(aboutQuery, { lang })
    return { props }
}

export default About
