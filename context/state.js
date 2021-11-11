import { createContext, useContext, useReducer } from "react";

const AppContext = createContext()


export const AppWrapper = ({ children }) => {
    let state = {
        openNav: false
    }
    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}
