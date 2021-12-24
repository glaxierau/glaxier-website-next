import React, { useEffect } from 'react'
import Service from '../../components/service/Service'
import SectionTitle from '../../components/common/SectionTitle'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'
import { useSelector } from 'react-redux'



const Services = (props) => {
    const { pageInfo, headerSection } = props
    return (
        <div >
            <SectionHead title={pageInfo.metadata.metaTitle} description={pageInfo.metadata.mataDescription} />
            <SectionTitle title={headerSection.title} description={headerSection.subtitle} />
            <Service paddingBottom={true} {...props.serviceSection} {...props.introductionSection} />
        </div>
    )
}


export default Services

export const getStaticProps = async () => {
    // ----------------- Data Fetching --------------------
    const props = await getData(`
    *[_type == 'services' && pageInfo.lang._ref == '107fa697-d70e-46bb-9d5a-5d8952bafd3a'][0]{
        ...,
        serviceSection->
      }
    `)

    return { props }
}
