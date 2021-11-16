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
    return (
        <div>
            <Head title="Contact | Industry of Business" />
            <ContactTitle title="What's the industry of business?" />
            <div className="mx-auto py-10" style={{ width: 300 }}>
                <Select options={options} />
                <div className="mx-auto w-56 py-10">
                    <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/industry-of-business' />
                </div>
            </div>

        </div>
    )
}

export default index
