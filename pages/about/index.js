import React from 'react'
import AboutSection from '../../components/about/About'
import ProjectSection from '../../components/project/Project'
import SectionTitle from '../../components/common/SectionTitle'
import Title from '../../components/Title'
import TeamBadge from '../../components/icons/TeamBadge'
import SectionHead from '../../components/common/Head'
import AboutToggle from '../../components/about/AboutToggle'
import Animate from '../../components/animation/Animate'
const About = ({ children }) => {
    return (
        <div>
            {/* <Animate> */}
            <SectionHead title="About Us | Glaxier" description="desc desc" />
            <div className="py-2">
                <SectionTitle title="ABOUT" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" />
            </div >
            <div className="lg:mt-0 -mt-10" id="whoweare">
                <AboutSection />
            </div>
            <div className="bg-white-dark py-20" id="industry-experience">
                <Title title="Industry Experience" lineWidth={600} height={30} />
                <AboutToggle />
            </div>
            <ProjectSection />
            <div className="lg:py-20 py-10" id="team">
                <Title title="Glaxier Team" lineWidth={220} />
                <div className="flex flex-wrap p-4 py-10 lg:px-20 md:px-0 px-4 justify-around items-center">
                    <TeamBadge position="Digital Advertising Specialist" />
                    <TeamBadge position="Digital Advertising Specialist" />
                    <TeamBadge position="Digital Advertising Specialist" />
                    <TeamBadge position="Digital Advertising Specialist" />
                </div>
            </div>
            {/* </Animate> */}
        </div>
    )
}

export default About
