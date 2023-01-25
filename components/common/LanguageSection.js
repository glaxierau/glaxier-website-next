import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
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
            <Flags inline={true} size={30} />
        </div>
    )
}

export default LanguageSection
