import Link from 'next/link';
import React from 'react'
import CookieConsent from 'react-cookie-consent';


function Cookie() {
    return (
        <CookieConsent
            debug={true}
            buttonText="Accept"
            declineButtonText="Decline"
            enableDeclineButton
            style={mainStyle}
            buttonStyle={buttonStyle}
            declineButtonStyle={declineButtonStyle}
            flipButtons
            expires={365}
            cookieName='userAcceptCookieConsent'
        >
            This website uses cookies to enhance the user experience.<br></br>
            <Link href={'/privacy-policy'} passHref>
                <p className="text-purple cursor-pointer">See our privacy policies</p>
            </Link>
        </CookieConsent >
    )
}

const buttonStyle = {
    backgroundColor: 'rgb(159 176 228)',
    color: 'white',
    borderRadius: 5
}
const declineButtonStyle = {
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: 5,
    marginLeft: -10
}
const mainStyle = {
    backgroundColor: 'white',
    color: 'black',
    boxShadow: '2px 2px 2px 1px rgb(159 176 228)'
}

export default Cookie