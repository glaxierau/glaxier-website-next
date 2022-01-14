import React from 'react'
import { useSelector } from "react-redux";
import SectionHead from '../common/Head'
import SectionTitle from '../common/SectionTitle'
import FooterLink from '../FooterLink'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Layout = ({ metadata, children, heroSection, pageName }) => {
    const { state } = useSelector(s => s.state)
    const general = state?.filter(r => r.name === 'general')[0]?.state.companyContent
    return (
        <div>
            <SectionHead title={metadata.metaTitle} description={metadata.mataDescription} />
            <SectionTitle title={pageName}>
                <FooterLink imgWidth={20} href={general?.companyLocation.locationURL} content={general?.companyLocation.locationLabel} fontSize="lg:text-base text-sm" color={"text-gray-500"}>
                    <LocationOnIcon className='text-red' fontSize='large' />
                </FooterLink>
                <br />
                <FooterLink imgWidth={15} href={`tel:${general?.companyPhone}`} content={general?.companyPhone} fontSize="text-base text-sm" color={"text-gray-500"}>
                    <LocalPhoneIcon className='text-red' fontSize='large' />
                </FooterLink>
                <br />
                <FooterLink imgWidth={20} href={`mailto:${general?.companyEmail}`} content={general?.companyEmail} fontSize="text-base text-sm" color={"text-gray-500"}>
                    <EmailIcon className='text-red' fontSize='large' />
                </FooterLink>
            </SectionTitle>
            <main>{children}</main>
        </div>
    )
}

export default Layout
