import FooterLink from '../FooterLink'
import Link from 'next/link'
import NewsletterSubscribe from './NewsletterSubscribe'
import Img from 'next/image'
import { useSelector } from 'react-redux'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
    const { state } = useSelector(s => s.state)
    const nav = state?.find(el => el.name === 'nav')
    const servicesList = nav?.state?.find(el => el.menuName === 'Services')
    return (
        <>
            <div className="footer static w-screen bg-red rounded-t-lg lg:px-24 md:px-5 px-2">
                <div className="flex lg:flex-row md:flex-row flex-col justify-center w-full pt-10 pb-5 p-2">
                    <div className="w-full h-full">
                        {/* logo */}
                        <div className="flex justify-start items-center">
                            <Img src="/assets/svg/footer_logo.svg" className="lg:mb-0 md:mb-0 mb-5" alt="logo" width="45px" height="45px" />
                            <p className=" ml-2" style={{ fontFamily: "Cutive Mono", fontSize: 18, }}>Glaxier</p>
                        </div>
                        {/* location  */}
                        <div className="my-6 mx-4" >

                            <FooterLink src="/assets/img/footer/location.svg" alt="location" href="https://goo.gl/maps/CsG48GVUC6eXEDk37" width={true} content="6 Motorway road, Prawet Bangkok 10250">
                                <LocationOnIcon className='text-white' fontSize='large' />
                            </FooterLink>
                            {/* phone  */}
                            <FooterLink src="/assets/img/footer/phone.svg" href="tel:+61424555959" alt="phone" content="+61 424 555 959">
                                <EmailIcon className='text-white' fontSize='large' />

                            </FooterLink>
                            {/* email  */}
                            <FooterLink src="/assets/img/footer/mail.svg" href="mailto:tan@glaxier.com.au" alt="mail" content="tan@glaxier.com.au">
                                <LocalPhoneIcon className='text-white' fontSize='large' />
                            </FooterLink>
                        </div>
                    </div>
                    <div className="flex items-start justify-start  w-full h-full lg:py-6 md:py-6 py-9">
                        {/* quick links */}
                        <div className="flex flex-col w-1/3">
                            <h4 className="text-base text-white">Quick links</h4>
                            <br />
                            {nav?.state?.map((list, index) =>
                                <Link key={index} href={list.slug}>{list.languages.title}</Link>
                            )}
                        </div>
                        {/* services  */}
                        <div className="flex flex-col w-1/2">
                            <h4 className="text-base text-white">Services</h4>
                            <br />
                            {
                                servicesList?.subMenu.map((list, index) =>
                                    <Link key={index} href={list.slug || '/'}>{list.languages.title}</Link>
                                )
                            }
                        </div>
                    </div>
                    <div className="w-full h-full pt-5">
                        {/* follow us  */}
                        <h4 className="text-base text-white">Follow us</h4>
                        <p>Join our community to keep up to date with the latest digital strategy that will help you grow you business.</p>
                        {/* input  */}
                        <NewsletterSubscribe />
                        {/* brand icons  */}
                        <div className="flex w-full lg:justify-end md:justify-end justify-center my-5">
                            <a href="https://www.facebook.com/GlaxierAgency" target="_blank" rel="noreferrer" className='px-3'><Img src="/assets/img/footer/facebook.svg" alt="facebook" width="35px" height="35px" /></a>
                            <a href="https://au.linkedin.com/company/glaxier" target="_blank" rel="noreferrer" className='px-3'><Img src="/assets/img/footer/linkedin.svg" alt="linkedin" width="35px" height="35px" /></a>
                            <a href="https://www.instagram.com/glaxier_official/" target="_blank" rel="noreferrer" className='px-3'><Img src="/assets/img/footer/instagram.svg" alt="instagram" width="35px" height="35px" /></a>
                        </div>
                    </div>
                </div>
                {/* footer meta  */}
                <div className="flex items-center justify-between py-8 border-t">
                    <span className='lg:text-sm md:text-sm text-xss text-white'>Privacy Policy | Terms of Use</span>
                    <span className='lg:text-sm md:text-sm text-xss text-white'>Copyright © All rights reserved | Glaxier</span>
                </div>
            </div>
        </>
    )
}

export default Footer
