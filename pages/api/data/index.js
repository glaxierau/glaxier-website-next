
import { getData } from '../../../hooks/getData'

export default async function getServerSideProps(req, res) {

    // -------------------  QUERIES -------------------------
    const clientSectionQuery = `*[_type =='home']{clientSection}[0]`
    const heroQuery = `*[_type =='home']{hero}[0]`
    const serviceQuery = `*[_type =='services'][0]`
    const serviceMapQuery = `*[_type == 'serviceMap'][0]`
    const aboutQuery = `*[_type == 'about'][0]`
    const aboutSectionQuery = `*[ _type == 'aboutSection'][0]`
    const ctaBreakSectionQuery = `*[_type == 'ctaBreakSection'][0]`
    const testimonialQuery = `*[ _type == 'testimonial']`
    const clientQuery = `*[_type == 'client']`
    const clientIndustryQuery = `*[_type == 'clientIndustry']`
    const teamMemberQuery = `*[ _type == 'teamMember']`


    // ----------------- Data Fetching --------------------
    const { hero } = await getData(heroQuery)
    const about = await getData(aboutQuery)
    const aboutSection = await getData(aboutSectionQuery)
    const services = await getData(serviceQuery)
    const serviceMap = await getData(serviceMapQuery)
    const { clientSection } = await getData(clientSectionQuery)
    const ctaBreakSection = await getData(ctaBreakSectionQuery)
    const clientIndustry = await getData(clientIndustryQuery)
    const testimonial = await getData(testimonialQuery)
    const teamMember = await getData(teamMemberQuery)
    const client = await getData(clientQuery)
    res.status(200).json(
        {
            services,
            serviceMap,
            about,
            hero,
            clientSection,
            ctaBreakSection,
            testimonial,
            aboutSection,
            clientIndustry,
            teamMember,
            client
        }
    )
}

