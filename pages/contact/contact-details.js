import AppButton from '../../components/AppButton'
import ContactTitle from '../../components/contact/Title'
import Link from 'next/link'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'
import { pushDataLayerForm } from '../../helper/pushDataLayer'
import { useSelector } from 'react-redux'


const index = ({ personalDetailSection }) => {
    const type = 'Contact Detail'
    const { form } = useSelector(s => s.contactForm)
    const index = form.findIndex(i => i.type === type)
    const _form = form[index]

    const ontoNextPage = () => {
        pushDataLayerForm('Contact Us', type, _form.firstName, _form.lastName, _form.email, _form.phoneNumber)
    }


    const onGettingInput = (e) => {
        const value = e.target.value
        const name = e.target.name
        switch (name) {
            case 'lname': return form[index].lastName = value;
            case 'fname': return form[index].firstName = value;
            case 'email': return form[index].email = value;
            case 'phone': return form[index].phoneNumber = value;
            default: return ''
        }
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <SectionHead title="Contact Us | Contact Details" />
            <ContactTitle title={personalDetailSection.question} />
            <form className="native_input flex flex-col justify-center items-center" >
                <input placeholder={personalDetailSection.firstNamePlaceholder} defaultValue={form[index].firstName} type="text" name="fname" className="lg:w-96 md:w-80 w-80 pl-4" onChange={e => onGettingInput(e)} />
                <input placeholder={personalDetailSection.lastNamePlaceholder} defaultValue={form[index].lastName} type="text" name='lname' className="lg:w-96 md:w-80 w-80 pl-4" onChange={e => onGettingInput(e)} />
                <input placeholder={personalDetailSection.emailPlaceholder} defaultValue={form[index].email} type="email" name="email" className="lg:w-96 md:w-80 w-80 pl-4" onChange={e => onGettingInput(e)} />
                <input placeholder={personalDetailSection.numberPlaceholder} defaultValue={form[index].phoneNumber} type="tel" name="phone" className="lg:w-96 md:w-80 w-80 pl-4" onChange={e => onGettingInput(e)} />
            </form>
            <div className="mx-auto w-96 flex flex-col items-center justify-center py-9">
                <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/industry-of-business' clicked={() => ontoNextPage()} />
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
