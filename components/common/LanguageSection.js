import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AU } from 'country-flag-icons/react/3x2'
import Flags from './Flags'

const LanguageSection = () => {
    const router = useRouter()
    const langs = router.locales
    const clang = router.locale

    const getPosition = () => {
        const value = document.getElementById("globeSVG").offsetLeft
        setPosition(value - 20)
    }

    return (
        <div className="flex">
            {/* {langs.map(language => (
                <Link key={language} href={router.asPath} locale={language} passHref>
                    <AU className="w-6 cursor-pointer" />
                </Link>
            ))} */}
            <Flags inline={true} />
        </div>
    )
}

export default LanguageSection
