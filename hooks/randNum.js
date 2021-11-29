export const getRandom = (max = 5) => {
    const randNum = Math.floor(Math.random() * max)
    return randNum
}
export const secondRandom = (max) => {
    const randNum = Math.floor(Math.random() * max)
    return getRandom(randNum)
}