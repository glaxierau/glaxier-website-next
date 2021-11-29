export const getSpecificPart = (value, number) => {
    const specificValue = value.split('-')[number]
    return specificValue
}