import FooterLink from '../FooterLink'
import Link from 'next/link'
import NewsletterSubscribe from './NewsletterSubscribe'
import Img from 'next/image'
import { useSelector } from 'react-redux'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

const Footer = () => {
    const { state } = useSelector((s) => s.state)
    const headerState = state?.find((el) => el.name === 'header')
    const header = headerState?.state?.menuList
    const servicesList = header?.find((el) => el.menuLabel === 'Services')
    const general = state?.filter((r) => r.name === 'general')[0]?.state
        .companyContent
    const companyName = state?.filter((r) => r.name === 'general')[0]?.state
        .companyName
    const footer = state?.filter((r) => r.name === 'footer')[0]?.state
        .footerDetail
    console.log(servicesList)
    return (
        <>
            <div className="footer_style static w-screen bg-red rounded-t-lg lg:px-24 md:px-5 px-2">
                <div className="flex lg:flex-row md:flex-row flex-col justify-center w-full pt-10 pb-5 p-2">
                    <div className="w-full h-full">
                        {/* logo */}
                        <div className="flex justify-start items-center">
                            <Img
                                src={'/assets/svg/footer_logo.svg'}
                                className="lg:mb-0 md:mb-0 mb-5"
                                alt="logo"
                                width="70px"
                                height="70px"
                            />
                            <p
                                className=" ml-2"
                                style={{
                                    fontFamily: 'Cutive Mono',
                                    fontSize: 18,
                                }}
                            >
                                {companyName}
                            </p>
                        </div>
                        {/* location  */}
                        <div className="my-6 mx-4">
                            <FooterLink
                                imgWidth={20}
                                href={general?.companyLocation.locationURL}
                                content={general?.companyLocation.locationLabel}
                                fontSize="lg:text-base text-sm"
                                color={'text-gray-500'}
                            >
                                <LocationOnIcon
                                    className="text-white"
                                    fontSize="large"
                                />
                            </FooterLink>

                            <FooterLink
                                imgWidth={15}
                                href={`tel:${general?.companyPhone}`}
                                content={general?.companyPhone}
                                fontSize="text-base text-sm"
                                color={'text-gray-500'}
                            >
                                <LocalPhoneIcon
                                    className="text-white"
                                    fontSize="large"
                                />
                            </FooterLink>

                            <FooterLink
                                imgWidth={20}
                                href={`mailto:${general?.companyEmail}`}
                                content={general?.companyEmail}
                                fontSize="text-base text-sm"
                                color={'text-gray-500'}
                            >
                                <EmailIcon
                                    className="text-white"
                                    fontSize="large"
                                />
                            </FooterLink>
                        </div>
                    </div>
                    <div className="flex items-start justify-start  w-full h-full lg:py-6 md:py-6 py-9">
                        {/* quick links */}
                        <div className="flex flex-col w-1/3">
                            <h4 className="text-base text-white">
                                Quick links
                            </h4>
                            <br />
                            {header?.map((list, index) => (
                                <Link key={index} href={`/${list.slug.current}`}>
                                    {list.menuLabel}
                                </Link>
                            ))}
                        </div>
                        {/* services  */}
                        <div className="flex flex-col w-1/2">
                            <h4 className="text-base text-white">Services</h4>
                            <br />
                            {servicesList?.subMenuList.map((list, index) => (
                                <Link key={index} href={`/services/${list.slug}` || '/'}>
                                    <a>
                                        {list.label}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="w-full h-full pt-5">
                        {/* follow us  */}
                        <h4 className="text-base text-white">
                            {footer?.followUs}
                        </h4>
                        <p>{footer?.followUsDescription}</p>

                        {/* input  */}
                        <NewsletterSubscribe label={footer?.footerInput} />

                        {/* brand icons  */}
                        <div className="flex w-full lg:justify-end md:justify-end justify-center my-5">
                            <a
                                href="https://www.facebook.com/GlaxierAgency"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3"
                            >
                                <Img
                                    src="/assets/img/footer/facebook.svg"
                                    alt="facebook"
                                    width="35px"
                                    height="35px"
                                />
                            </a>
                            <a
                                href="https://au.linkedin.com/company/glaxier"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3"
                            >
                                <Img
                                    src="/assets/img/footer/linkedin.svg"
                                    alt="linkedin"
                                    width="35px"
                                    height="35px"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/glaxier_official/"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3"
                            >
                                <Img
                                    src="/assets/img/footer/instagram.svg"
                                    alt="instagram"
                                    width="35px"
                                    height="35px"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* footer meta  */}
                <div className="flex items-center justify-between py-8 border-t">
                    <span className="lg:text-sm md:text-sm text-xss text-white">
                        Privacy Policy | Terms of Use
                    </span>
                    <span className="lg:text-sm md:text-sm text-xss text-white">
                        Copyright © All rights reserved | {companyName}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Footer
