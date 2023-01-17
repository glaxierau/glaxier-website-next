
export const languageToUpperCase = (language) => {
    const first = language.split('-')[0]
    const second = language.split('-')[1].toUpperCase()
    return `${first}-${second}`
}

export const timeStamp = (date) => {
    const d = new Date(date)
    const month = d.getMonth() < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
    return `${d.getDate()}/${month}/${d.getFullYear()}`
}

export const filterArray = (arr, type, key) => {
    return arr?.filter(list => list._type == type && list._key == key)[0]
}