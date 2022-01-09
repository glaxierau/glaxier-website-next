import Link from 'next/link'
import CheckBox from '@mui/material/Checkbox'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { getData } from '../../hooks/getData'
import { getSpecificForm } from '../../hooks/form'
import { pushDataLayerForm } from '../../helper/pushDataLayer'
import AppButton from '../../components/AppButton'
import ContactTitle from '../../components/contact/Title'
import SectionHead from '../../components/common/Head'

function Cd({ personalDetailSection }) {
    const type = 'Contact Detail'
    const { form } = useSelector((s) => s.contactForm)
    const index = form.findIndex((i) => i.type === type)
    const _form = form[index]
    const [checkbox, setCheck] = useState(true)
    const router = useRouter()
    const label =
        'I agree to receive emails from Glaxier including news and developments.'

    const pushDataLayer = () => {
        pushDataLayerForm(
            'Contact Us',
            type,
            _form.firstName,
            _form.lastName,
            _form.email,
            _form.phoneNumber
        )
    }

    const onGettingInput = (e) => {
        const value = e.target.value
        const name = e.target.name
        switch (name) {
            case 'MERGE2':
                return (form[index].lastName = value)
            case 'MERGE1':
                return (form[index].firstName = value)
            case 'MERGE0':
                return (form[index].email = value)
            case 'MERGE4':
                return (form[index].phoneNumber = value)
            default:
                return ''
        }
    }

    const Form = () => {
        const onSubmittingForm = async (e) => {
            e.preventDefault()
            pushDataLayer()
            const content = {
                fName: _form.firstName,
                lName: _form.lastName,
                email: _form.email,
                phone: _form.phoneNumber,
                goal: getSpecificForm(form, 'Goal').value,
                status: 'subscribed',
            }

            // check subscription permissions
            if (!checkbox) {
                content.status = 'unsubscribed'
            }
            try {
                const response = await axios.put('/api/audiences/add', content)
                const resStatus = response.data.status
                console.log(response.data.status)
                if (resStatus === 'subscribed' || resStatus === 'unsubscribed') router.push('/contact/industry-of-business')
                else throw JSON.parse(response.data.response.text).title
            } catch (err) {
                alert(err)
            }
        }

        return (
            <>
                <form
                    className="native_input flex flex-col justify-center items-center"
                    onSubmit={(e) => onSubmittingForm(e)}
                >
                    <input
                        placeholder={personalDetailSection.firstNamePlaceholder}
                        defaultValue={form[index].firstName}
                        type="text"
                        name="MERGE1"
                        id="MERGE1"
                        className="lg:w-96 md:w-80 w-80 pl-4"
                        onChange={(e) => onGettingInput(e)}
                        required
                    />
                    <input
                        placeholder={personalDetailSection.lastNamePlaceholder}
                        defaultValue={form[index].lastName}
                        type="text"
                        name="MERGE2"
                        id="MERGE2"
                        className="lg:w-96 md:w-80 w-80 pl-4"
                        onChange={(e) => onGettingInput(e)}
                        required
                    />
                    <input
                        placeholder={personalDetailSection.emailPlaceholder}
                        defaultValue={form[index].email}
                        type="email"
                        name="MERGE0"
                        id="MERGE0"
                        className="lg:w-96 md:w-80 w-80 pl-4"
                        onChange={(e) => onGettingInput(e)}
                        required
                    />
                    <input
                        placeholder={personalDetailSection.numberPlaceholder}
                        defaultValue={form[index].phoneNumber}
                        type="tel"
                        name="MERGE4"
                        id="MERGE4"
                        className="lg:w-96 md:w-80 w-80 pl-4"
                        onChange={(e) => onGettingInput(e)}
                        required
                    />
                    <div className="flex justify-start items-center lg:w-96 md:w-80 w-80 py-2">
                        <CheckBox
                            checked={checkbox}
                            sx={{
                                color: '#9FB0E4',
                                '&.Mui-checked': { color: '#9FB0E4' },
                            }}
                            onChange={(e) => setCheck(e.target.checked)}
                        />
                        <p className="text-xss leading-3 text-gray-400">
                            {label}
                        </p>
                    </div>
                    <div className="mx-auto w-96 flex flex-col items-center justify-center">
                        <AppButton
                            title="Continue"
                            width={200}
                            type="submit"
                            bgColor="bg-blue-dark"
                            bgColorHover="hover:bg-red"
                            txtColor="text-white"
                        />
                    </div>
                    <Link href="/contact/industry-of-business" passHref={true}>
                        <p className="cursor-pointer underline text-purple hover:text-red pb-5">
                            SKIP
                        </p>
                    </Link>
                </form>
            </>
        )
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <SectionHead title="Contact Us | Contact Details" />
            <ContactTitle title={personalDetailSection.question} />
            <Form />
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
    const props = await getData(
        `*[_type == 'interactiveForm'][${index}]{personalDetailSection}`
    )
    return { props }
}

export default Cd
