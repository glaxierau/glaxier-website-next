import { ReactCountryFlag } from 'react-country-flag'
import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

export default function Flags({ inline = false, size = 25 }) {
    const router = useRouter()
    const getLang = (lang) => lang.split('-')[1]
    return (
        <div className={inline ? 'flex' : ''}>
            {router.locales.map((lang, index) => {
                return (
                    <Link key={index} locale={lang} href={router.asPath} passHref>
                        <ReactCountryFlag
                            countryCode={getLang(lang)}
                            className='p-1 py-2 text-center cursor-pointer lg:hover:bg-purple w-full h-full'
                            style={{ fontSize: size }}
                        />
                    </Link>
                )
            })}
        </div>
    )
}
