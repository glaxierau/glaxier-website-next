import React, { useState } from 'react'
import Img from 'next/image'
import { sanitize } from '../../utils/miscellanous'
import InputAlert from '../common/InputAlert'
import { withSizeLessThan } from '../../hooks/useWindowSize'

const NewsletterForm = ({ status, message, onValidated }) => {
    const sm = withSizeLessThan(600)
    const [email, setEmail] = useState('')
    const [openAlert, setAlert] = useState(false)
    const [error, setError] = useState(null)

    const getMessage = (message) => {
        if (!message) {
            return null;
        }
        const result = message?.split('-') ?? null;
        if ("0" !== result?.[0]?.trim()) {
            return sanitize(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? sanitize(formattedMessage) : null;

    }

    const handleInputKeyEvent = (e) => {
        setError(null);
        if (e.keyCode === 13) {
            e.preventDefault();
            onSubmit();
        }
    }

    const onSubmit = () => {
        if (!email || email === '') {
            setError('Please enter a valid email address!')
            return null
        } else if (status !== 'success') {
            setAlert(true)
        }
        const isFormValidated = onValidated({ EMAIL: email })
        return email && email.indexOf('@') > -1 && isFormValidated
    }
    return (
        <>
            <div className={`relative flex items-center justify-between w-full bg-white rounded-full p-6 h-12 mt-5 transition-opacity ${status === 'error' && !sm ? 'outline outline-yellow-400 shadow-md' : 'outline-none'}`}>
                <input type="email" name='email' value={email} placeholder="Enter your email"
                    className="w-11/12 text-gray-500 placeholder:text-base text-base "
                    onChange={e => setEmail(e.target.value)}
                    onKeyUp={e => handleInputKeyEvent(e)}
                    onBlur={() => { setError(null), setAlert(false) }} />
                <button type='submit'
                    className='absolute top-1/2 transform -translate-y-2/4 right-2 w-11 h-10 flex justify-around items-center'>
                    {status === 'sending' ?
                        <Img className="cursor-pointer hover:scale-105 transition ease-in-out duration-75" src="/assets/svg/loading.svg" alt="loading" width={28} height={28} />
                        :
                        <>
                            {status === 'error' && <Img className="cursor-pointer hover:scale-105 transition ease-in-out duration-75" src="/assets/svg/alert.svg" alt="alert" width={15} height={15}
                                onMouseEnter={() => setAlert(true)}
                                onMouseLeave={() => setAlert(false)}
                                onClick={() => setAlert(!openAlert)} />}
                            <Img className="cursor-pointer hover:scale-105 transition ease-in-out duration-75" src="/assets/img/footer/arrow.svg" alt="right arrow" width={15} height={15} onClick={(e) => onSubmit(e)} />
                        </>
                    }
                </button>
                <InputAlert isOpen={openAlert} message={message} error={error} status={status} />
            </div>

            <div className="min-h-42px text-center text-sm rounded-full mt-2">
                {'success' === status && 'error' !== status && !error && (
                    <div className="text-green-500 font-bold pt-2" dangerouslySetInnerHTML={{ __html: message }} />
                )}
            </div>
        </>
    )
}

export default NewsletterForm

