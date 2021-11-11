export const setAllToFalse = (array, update) => {
    let newForm = [...array]
    for (let i = 0; i < array.length; i++) { newForm[i].active = false }
    return update(newForm)
}