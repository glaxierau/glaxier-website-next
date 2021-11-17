import React from 'react'
import ContactTitle from '../../components/contact/Title'
import Head from '../../components/common/Head'
import Select from 'react-select'
import AppButton from '../../components/appButton'

const index = () => {

    const options = [
        { value: 'partnership', label: 'Partnership' },
        { value: 'corporation', label: 'Corporation' },
        { value: 'nonprofit', label: 'Nonprofit Organization' }
    ]
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#9FB0E4" : 'white',
            color: state.isFocused ? 'white' : '#9FB0E4',
            padding: 20,
        }),
        control: () => ({
            display: 'flex',
            width: 400,
            borderRadius: 100,
            padding: 4,
            border: '1px solid #9FB0E4',

        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            const color = '#9FB0E4'

            return { ...provided, opacity, transition, color };
        }
    }

    return (
        <div>
            <Head title="Contact | Industry of Business" />
            <ContactTitle title="What's the industry of business?" />
            <div className="mx-auto py-10" style={{ width: 400 }} >
                <Select options={options} styles={customStyles} />
                <div className="mx-auto w-56 py-10">
                    <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/expected-revenue' />
                </div>
            </div>

        </div>
    )
}

export default index
