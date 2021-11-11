export const navReducer = (state, action) => {
    switch (action.type) {
        case 'open':
            return true;
        case 'close':
            return false;
        default:
            return false
    }
}