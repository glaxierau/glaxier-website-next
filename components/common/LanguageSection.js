import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getSpecificPart } from '../../hooks/getSpecificPart'

const LanguageSection = () => {
    const router = useRouter()
    const lang = router.locales
    return (
        <div className="flex">
            {lang.map(language => (
                <Link key={language} href={router.asPath} locale={language}>
                    <p className={`mr-4 text-base cursor-pointer font-light text-purple hover:text-red`}>{getSpecificPart(language, 1)}</p>
                </Link>
            ))}
        </div>
    )
}

export default LanguageSection
