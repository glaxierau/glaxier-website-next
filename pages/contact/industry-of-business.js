import React from 'react'
import ContactTitle from '../../components/contact/Title'
import Head from '../../components/common/Head'
import Select from 'react-select'
import AppButton from '../../components/AppButton'
import useWindowSize, { withSizeLessThan } from '../../hooks/useWindowSize'
import { getData } from '../../hooks/getData'
import { pushDataLayer } from '../../helper/pushDataLayer'
import { useDispatch, useSelector } from 'react-redux'
import { updateForm } from '../../hooks/form'

const index = ({ industrySection }) => {
    const type = 'Industry of Business'
    const dispatch = useDispatch()
    const { form } = useSelector(state => state.contactForm)
    const index = form.findIndex(i => i.type === type)
    const sm = withSizeLessThan(420)

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#9FB0E4" : 'white',
            color: state.isFocused ? 'white' : '#9FB0E4',
            padding: 20,
            cursor: 'pointer'
        }),
        control: () => ({
            display: 'flex',
            width: sm ? useWindowSize().width - 40 : 400,
            borderRadius: 100,
            padding: 4,
            border: '1px solid #9FB0E4',

        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            const color = '#9FB0E4'
            return { ...provided, opacity, transition, color };
        },

    }

    const onSelection = (e) => {
        form[index].value = e.value
        updateForm(form, dispatch)
    }

    const ontoNextPage = () => {
        pushDataLayer('Contact Us', 'Industry of Business', form[index].value)
    }
    return (
        <div>
            <Head title="Contact Us | Industry of Business" />
            <ContactTitle title={industrySection.question} />
            <div className="mx-auto py-10 flex flex-col items-center justify-center">
                <Select options={industrySection.selectOptions} styles={customStyles} onChange={(e) => onSelection(e)} placeholder={form[index].value || 'Select...'} className="cursor-pointer" />
                <div className="mx-auto w-56 py-10">
                    <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/expected-revenue' clicked={() => ontoNextPage()} />
                </div>
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
    const props = await getData(`*[_type == 'interactiveForm'][${index}]{industrySection{
        ...,
        selectOptions[]->{
          "value": industry,
          "label": industry,
        }
        }}
        `)
    return { props }
}

export default index
