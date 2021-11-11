import React, { useState } from 'react'
import { setAllToFalse } from '../../hooks/setAllToFalse'
import { setToTrue } from '../../hooks/setToTrue'

const LanguageSection = () => {
    const [languages, updateLanguages] = useState([
        { type: 'ENG', active: true },
        { type: 'TH', active: false }
    ])

    const onLanguageChange = (language) => {
        setAllToFalse(languages, updateLanguages)
        setToTrue(language, languages, updateLanguages)
    }
    return (
        <div className="flex">
            {languages.map(language => (
                <p key={language.type} className={`mr-4 text-base cursor-pointer font-light text-${language.active ? 'red' : 'purple'}`} onClick={() => onLanguageChange(language)}>{language.type}</p>
            ))}
        </div>
    )
}

export default LanguageSection
