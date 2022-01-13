import React from 'react'
import SectionHead from '../common/Head'
import SectionTitle from '../common/SectionTitle'
import FooterLink from '../FooterLink'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Layout = ({ metadata, children, heroSection, pageName }) => {
    return (
        <div>
            <SectionHead title={metadata.metaTitle} description={metadata.mataDescription} />
            <SectionTitle title={pageName}>
                <FooterLink imgWidth={20} href="https://goo.gl/maps/CsG48GVUC6eXEDk37" content="6 Motorway road, Prawet Bangkok 10250" fontSize="lg:text-base text-sm" color={"text-gray-500"}>
                    <LocationOnIcon className='text-red' fontSize='large' />
                </FooterLink>
                <br />
                <FooterLink imgWidth={15} href={`tel:${heroSection.phone}`} content={heroSection.phone} fontSize="text-base text-sm" color={"text-gray-500"}>
                    <LocalPhoneIcon className='text-red' fontSize='large' />
                </FooterLink>
                <br />
                <FooterLink imgWidth={20} href={`mailto:${heroSection.email}`} content={heroSection.email} fontSize="text-base text-sm" color={"text-gray-500"}>
                    <EmailIcon className='text-red' fontSize='large' />
                </FooterLink>
            </SectionTitle>
            <main>{children}</main>
        </div>
    )
}

export default Layout
