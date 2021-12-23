import AppButton from '../../components/AppButton'
import ContactTitle from '../../components/contact/Title'
import Link from 'next/link'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'


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
// export const getServerSideProps = async (req, res) => {

//     let lang = req.locale
//     let language = await getData(`*[_type == 'languageOption' && language == '${lang}']{_id}[0]`)
//     language = language._id

//     const data = await getData(
//         `*[ _type == 'contact' && pageInfo.lang._ref == '107fa697-d70e-46bb-9d5a-5d8952bafd3a'][0]{
//             ...,
//             "goal":formSection->{goalSection},
//             "interactiveForm":*[ _type == 'interactiveForm'][1]
//             }`)
//     return {
//         props: data
//     }
// }

export default index
