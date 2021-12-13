import React, { useEffect } from 'react'
import Service from '../../components/service/Service'
import SectionTitle from '../../components/common/SectionTitle'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'
import { useSelector } from 'react-redux'



const Services = () => {
    const { data } = useSelector(state => state.data)
    const { services } = data
    return (
        <div>
            <SectionHead title="Services | Glaxier" />
            <SectionTitle title={services.headerSection.title} description={services.headerSection.subtitle} />
            <Service paddingBottom={true} />
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
    const { headerSection } = await getData(serviceQuery)
    const services = await getData(serviceQuery)

    return {
        props: { header: headerSection, serviceMap, services }
    }
}
