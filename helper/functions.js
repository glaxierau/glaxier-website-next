
export const languageToUpperCase = (language) => {
    const first = language.split('-')[0]
    const second = language.split('-')[1].toUpperCase()
    return `${first}-${second}`
}

export const timeStamp = (date) => {
    const d = new Date(date)
    return `${d.getDate()}-${d.getUTCMonth()}-${d.getFullYear()}`
}