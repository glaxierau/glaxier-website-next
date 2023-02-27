import React from 'react'
import Service from '../../components/service/Service'
import SectionTitle from '../../components/common/SectionTitle'
import SectionHead from '../../components/common/Head'
import { client } from '../../hooks/getData'
import { servicePageQuery } from '../../sanity/pagesQuery'

const Services = (props) => {
    const { pageInfo, headerSection } = props
    return (
        <div>
            <SectionHead
                title={pageInfo?.metadata.metaTitle}
                description={pageInfo?.metadata.mataDescription}
            />
            <SectionTitle
                title={headerSection?.title}
                description={headerSection?.subtitle}
            />
            <Service
                paddingBottom={true}
                {...props.serviceSection}
                {...props.introductionSection}
            />
        </div>
    )
}

export default Services

export const getStaticProps = async (req, res) => {
    // ----------------- Data Fetching --------------------
    const lang = req.locale
    const props = await client.fetch(servicePageQuery, { lang })
    return { props }
}
