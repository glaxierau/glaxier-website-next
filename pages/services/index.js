import React, { useEffect } from 'react'
import Service from '../../components/service/Service'
import SectionTitle from '../../components/common/SectionTitle'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'
import { useDispatch } from 'react-redux'



const Services = ({ header, serviceMap, services }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'GET_SERVICES', services, serviceMap })
    }, [services, serviceMap])
    return (
        <div>
            <SectionHead title="Services | Glaxier" />
            <SectionTitle title={header.title} description={header.subtitle} />
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
