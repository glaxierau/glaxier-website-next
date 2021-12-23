import React from 'react'
import SectionHead from '../common/Head'
import SectionTitle from '../common/SectionTitle'
import FooterLink from '../FooterLink'
import Loading from '../loading/Loading'

const Layout = ({ metadata, children, heroSection }) => {
    console.log(metadata)
    return (
        <div>
            <SectionHead title={metadata.metaTitle} description={metadata.mataDescription} />
            <SectionTitle title={heroSection.title}>
                <FooterLink src="/assets/img/contact/common/location.png" imgWidth={20} href="https://goo.gl/maps/CsG48GVUC6eXEDk37" content="6 Motorway road, Prawet Bangkok 10250" fontSize="lg:text-base text-sm" color={"text-gray-500"} />
                <br />
                <FooterLink src="/assets/img/contact/common/phone.png" imgWidth={15} href={`tel:${heroSection.phone}`} content={heroSection.phone} fontSize="text-base text-sm" color={"text-gray-500"} />
                <br />
                <FooterLink src="/assets/img/contact/common/mail.png" imgWidth={20} href={`mailto:${heroSection.email}`} content={heroSection.email} fontSize="text-base text-sm" color={"text-gray-500"} />
            </SectionTitle>
            <main>{children}</main>
            {/* <Loading /> */}
        </div>
    )
}

export default Layout
