import React, { useState } from 'react'

const Alert = ({ message = 'alert' }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className='fixed top-0 left-0 z-50 bg-gray-900 text-white'>
            <p>{message}</p>
        </div>
    )
}

export default Alert
