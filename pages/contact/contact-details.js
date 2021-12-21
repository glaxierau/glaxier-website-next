import AppButton from '../../components/AppButton'
import ContactTitle from '../../components/contact/Title'
import Link from 'next/link'
import SectionHead from '../../components/common/Head'


const index = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <SectionHead title="Contact Us | Contact Details" />
            <ContactTitle title="Leave your contact details for us" />
            <form className="native_input flex flex-col justify-center items-center" >
                <input placeholder="First Name" type="text" className="lg:w-96 md:w-80 w-80 pl-4" />
                <input placeholder="Last Name" type="text" className="lg:w-96 md:w-80 w-80 pl-4" />
                <input placeholder="Email" type="email" className="lg:w-96 md:w-80 w-80 pl-4" />
                <input placeholder="Contact Number" type="tel" className="lg:w-96 md:w-80 w-80 pl-4" />
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

export default index