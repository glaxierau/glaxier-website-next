import React from 'react'
import AboutSection from '../../components/about/About'
import ProjectSection from '../../components/project/Project'
import SectionTitle from '../../components/common/SectionTitle'
import Title from '../../components/title'
import TeamBadge from '../../components/icons/TeamBadge'
import SectionHead from '../../components/common/Head'
const About = () => {
    return (
        <div>
            <SectionHead title="About" description="desc desc" />
            <div className="py-2">
                <img src="/shape.svg" alt="glaxier shape" />
                <SectionTitle title="ABOUT" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" />
            </div >
            <div className="lg:mt-0 -mt-10">
                <AboutSection />
            </div>
            <div className="bg-white-dark py-20">
                <Title title="Industry Experience" lineWidth={600} height={30} />
            </div>
            <ProjectSection />
            <div className="lg:py-20 py-10">
                <Title title="Glaxier Team" lineWidth={220} />
                <div className="flex flex-wrap p-4 py-10 lg:px-20 md:px-0 px-4 justify-around items-center">
                    <TeamBadge position="Digital Advertising Specialist" />
                    <TeamBadge position="Digital Advertising Specialist" />
                    <TeamBadge position="Digital Advertising Specialist" />
                    <TeamBadge position="Digital Advertising Specialist" />
                </div>
            </div>
        </div>
    )
}

export default About
