import React from 'react'

const ContactTitle = ({ title }) => {
    return (
        <div>
            <h3 className="lg:text-2xl md:text-2xl text-base font-black text-center py-10 px-10">{title}</h3>
        </div>
    )
}

export default ContactTitle
