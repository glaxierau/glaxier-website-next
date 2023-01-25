import { useRouter } from "next/router"

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

export const makeFirstCharUpperCase = (value) => {
    return `${value[0]?.toUpperCase()}${value?.slice(1)?.toLowerCase()}`
}

export const overrideDoubbledArray = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1)
            result.push(arr[i])
    }
    return result
}


export const splitArrayIntoChunks = (arr, perChunk = 9) => {
    const splittedArrays = arr.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk)
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }
        resultArray[chunkIndex].push(item)
        return resultArray
    }, [])
    return splittedArrays
}


export const useEng = () => {
    const router = useRouter()
    return router.locale === 'en-au' ? true : false
}