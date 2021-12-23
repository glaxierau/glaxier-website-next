
import { getData } from '../../../hooks/getData'

export default async function handler(req, res) {

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
    const homeQuery = `*[_type =='home'][0]`
    const contactQuery = `*[_type =='contact'][0]`


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
    const home = await getData(homeQuery)
    const contact = await getData(contactQuery)

    const type = req.query.type
    console.log('type is: ', type)
    switch (type) {
        case '':
            return (
                res.status(200).json(
                    {
                        home,
                        hero,
                        services,
                        serviceMap,
                        aboutSection,
                        client,
                        clientIndustry,
                        clientSection,
                        ctaBreakSection,
                        testimonial,
                    }
                ));
        case 'about':
            return (
                res.status(200).json({ contact, about, aboutSection, client, clientIndustry, ctaBreakSection, teamMember }));
        default:
            return {
                notFound: true
            }
    }


    // res.status(200).json(
    //     {
    //         home,
    //         contact,
    //         services,
    //         serviceMap,
    //         about,
    //         hero,
    //         clientSection,
    //         ctaBreakSection,
    //         testimonial,
    //         aboutSection,
    //         clientIndustry,
    //         teamMember,
    //         client
    //     }
    // )
}

