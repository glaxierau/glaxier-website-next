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

const About = () => {
    const { data } = useSelector(state => state.data)
    const { about, client, clientIndustry, ctaBreakSection, teamMember } = data
    return (
        <div>
            <SectionHead title="About Us | Glaxier" description={about.subTitle} />
            <div className="py-2">
                <SectionTitle title={upperCaseText(about.headerSection.title)} description={about.headerSection.subtitle} />
            </div >
            <div className="lg:mt-0 -mt-10" id="whoweare">
                <AboutSection dbAbout={about} />
            </div>
            <div className="bg-white-dark py-20" id="industry-experience">
                <Title title="Industry Experience" lineWidth={600} height={30} />
                <AboutToggle clients={client} industry={clientIndustry} />
            </div>
            <ProjectSection {...ctaBreakSection} />
            <div className="lg:py-20 py-10" id="team">
                <Title title={about.teamSection.title} lineWidth={220} />
                <div className="flex flex-wrap p-4 py-10 lg:px-5 md:px-2 px-4 mx-auto justify-around items-center w-4/5">
                    {teamMember.map(member => <TeamBadge key={member._id} name={member.name} position={member.position} />)}
                </div>
            </div>
        </div>
    )
}

export default About

