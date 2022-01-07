import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const LanguageSection = () => {
    const router = useRouter()
    const langs = router.locales
    const clang = router.locale
    return (
        <div className="flex">
            {langs.map(language => (
                <Link key={language} href={router.asPath} locale={language} passHref>
                    <p className={`mr-4 text-base cursor-pointer font-light ${language === clang ? 'text-red' : 'text-purple'} hover:text-red `}>{language.split('-')[0].toUpperCase()}</p>
                </Link>
            ))}
        </div>
    )
}

export default LanguageSection
