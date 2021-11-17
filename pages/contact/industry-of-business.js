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
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            padding: 20,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: 400,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }

    return (
        <div>
            <Head title="Contact | Industry of Business" />
            <ContactTitle title="What's the industry of business?" />
            <div className="mx-auto py-10 bg-gray-400" style={{ width: 500 }}>
                <Select options={options} styles={customStyles} />
                <div className="mx-auto w-56 py-10">
                    <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/expected-revenue' />
                </div>
            </div>

        </div>
    )
}

export default index
