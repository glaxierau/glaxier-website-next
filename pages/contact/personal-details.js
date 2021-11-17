import AppButton from '../../components/AppButton'
import ContactTitle from '../../components/contact/Title'
import Link from 'next/link'

const index = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <ContactTitle title="Leave your personal details for us" />
            <form className="native_input flex flex-col justify-center items-center" >
                <input placeholder="First Name" type="text" className="lg:w-96 md:w-80 w-80 pl-4" />
                <input placeholder="Last Name" type="text" className="lg:w-96 md:w-80 w-80 pl-4" />
                <input placeholder="Email" type="email" className="lg:w-96 md:w-80 w-80 pl-4" />
                <input placeholder="Contact Number" type="tel" className="lg:w-96 md:w-80 w-80 pl-4" />
            </form>
            <div className="mx-auto w-96 flex flex-col items-center justify-center py-9">
                <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/contact-detail' />
                <Link href="/contact/contact-detail">
                    <p className="cursor-pointer underline py-2 text-purple">SKIP</p>
                </Link>
            </div>
        </div>
    )
}

export default index
