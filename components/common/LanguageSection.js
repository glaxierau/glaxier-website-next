import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const LanguageSection = () => {
    const router = useRouter()
    const lang = router.locales

    return (
        <div className="flex">
            {lang.map(language => (
                <Link href={router.asPath} locale={language}>
                    <p key={language} className={`mr-4 text-base cursor-pointer font-light text-purple`}>{language}</p>
                </Link>
            ))}
        </div>
    )
}

export default LanguageSection
