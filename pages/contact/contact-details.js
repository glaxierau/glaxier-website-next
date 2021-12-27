import AppButton from '../../components/AppButton'
import ContactTitle from '../../components/contact/Title'
import Link from 'next/link'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'


const index = ({ personalDetailSection }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <SectionHead title="Contact Us | Contact Details" />
            <ContactTitle title={personalDetailSection.question} />
            <form className="native_input flex flex-col justify-center items-center" >
                <input placeholder={personalDetailSection.firstNamePlaceholder} type="text" className="lg:w-96 md:w-80 w-80 pl-4" />
                <input placeholder={personalDetailSection.lastNamePlaceholder} type="text" className="lg:w-96 md:w-80 w-80 pl-4" />
                <input placeholder={personalDetailSection.emailPlaceholder} type="email" className="lg:w-96 md:w-80 w-80 pl-4" />
                <input placeholder={personalDetailSection.numberPlaceholder} type="tel" className="lg:w-96 md:w-80 w-80 pl-4" />
            </form>
            <div className="mx-auto w-96 flex flex-col items-center justify-center py-9">
                <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/industry-of-business' />
                <Link href="/contact/industry-of-business">
                    <p className="cursor-pointer underline py-2 text-purple">SKIP</p>
                </Link>
            </div>
        </div>
    )
}

export const getStaticProps = async (ctx) => {
    const locale = ctx.locale
    let index = 1
    if (locale == 'en-au') {
        index = 1
    } else {
        index = 0
    }
    const props = await getData(`*[_type == 'interactiveForm'][${index}]{personalDetailSection}`)
    return { props }
}

export default index
