import React from 'react'
import SectionHead from '../../components/common/Head'
import SectionTitle from '../../components/common/SectionTitle'
import FooterLink from '../../components/FooterLink'
import Loading from '../../components/loading/Loading'

const Layout = ({ metadata, children }) => {
    return (
        <div>
            <SectionHead title={metadata.metaTitle} description={metadata.mataDescription} />
            <SectionTitle title="CONTACT">
                <FooterLink src="/assets/img/contact/common/location.png" imgWidth={20} href="/" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy" fontSize="lg:text-base text-sm" />
                <br />
                <FooterLink src="/assets/img/contact/common/phone.png" imgWidth={15} href="tel:+61424-555-959" content="+61424 555 959" fontSize="text-base text-sm" />
                <br />
                <FooterLink src="/assets/img/contact/common/mail.png" imgWidth={20} href="mailto:tan@glaxier.com.au" content="tan@glaxier.com.au" fontSize="text-base text-sm" />
            </SectionTitle>
            <main>{children}</main>
            {/* <Loading /> */}
        </div>
    )
}

export default Layout
