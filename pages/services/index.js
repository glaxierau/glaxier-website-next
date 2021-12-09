import React from 'react'
import Service from '../../components/service/Service'
import SectionTitle from '../../components/common/SectionTitle'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'



const Services = ({ header, serviceMap, introductionSection }) => {
    return (
        <div>
            <SectionHead title="Services | Glaxier" />
            <SectionTitle title={header.title} description={header.subtitle} />
            <Service paddingBottom={true} {...serviceMap} {...introductionSection} />
        </div>
    )
}


export default Services

export const getServerSideProps = async () => {
    // --------------------- Queries --------------------------
    const serviceQuery = `*[_type =='services'][0]`
    const serviceMapQuery = `*[_type == 'serviceMap'][0]`

    // ----------------- Data Fetching --------------------
    const serviceMap = await getData(serviceMapQuery)
    const { headerSection, introductionSection } = await getData(serviceQuery)

    return {
        props: { header: headerSection, introductionSection, serviceMap }
    }
}
