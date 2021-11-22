import React from 'react'
import ServicesComponent from '../../components/service/Service'
import SectionTitle from '../../components/common/SectionTitle'


const Services = () => {
    return (
        <div>
            <SectionTitle title="Services" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" />
            <ServicesComponent paddingBottom={true} />
        </div>
    )
}


export default Services
