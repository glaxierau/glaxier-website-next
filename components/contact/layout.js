import React from 'react'
import SectionHead from '../common/Head'
import SectionTitle from '../common/SectionTitle'
import FooterLink from '../FooterLink'

const Layout = ({ metadata, children, heroSection, pageName }) => {
    return (
        <div>
            <SectionHead title={metadata.metaTitle} description={metadata.mataDescription} />
            <SectionTitle title={pageName}>
                <FooterLink src="/assets/img/contact/common/location.png" imgWidth={20} href="https://goo.gl/maps/CsG48GVUC6eXEDk37" content="6 Motorway road, Prawet Bangkok 10250" fontSize="lg:text-base text-sm" color={"text-gray-500"} />
                <br />
                <FooterLink src="/assets/img/contact/common/phone.png" imgWidth={15} href={`tel:${heroSection.phone}`} content={heroSection.phone} fontSize="text-base text-sm" color={"text-gray-500"} />
                <br />
                <FooterLink src="/assets/img/contact/common/mail.png" imgWidth={20} href={`mailto:${heroSection.email}`} content={heroSection.email} fontSize="text-base text-sm" color={"text-gray-500"} />
            </SectionTitle>
            <main>{children}</main>
        </div>
    )
}

export default Layout
