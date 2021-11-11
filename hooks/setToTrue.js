
export const setToTrue = (singleResult, array, update) => {
    let type = singleResult.type
    let newForm = [...array]
    let objIndex = array.findIndex(obj => obj.type == type)
    newForm[objIndex].active = true
    return update(newForm)
}
