import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { navListQuery, generalSettings, footer } from "../config/queries"
import { client } from "../hooks/getData"

export const FetcherUI = ({ lang }) => {
    return (
        <>
            <DATAGETTER type='nav' lang={lang} query={navListQuery} />
            <DATAGETTER type='general' lang={lang} query={generalSettings} />
            <DATAGETTER type='footer' lang={lang} query={footer} />
        </>
    )

}


const DATAGETTER = ({ type, lang, query }) => {
    const { state } = useSelector(s => s.state)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            const nav = await client.fetch(query, { lang })
            const newState = { name: type, state: nav }
            const found = state.find(element => element.name === newState.name);
            const index = state.indexOf(found)
            if (found) {
                state[index] = newState
                dispatch({ type: 'GET_STATE', state })
            } else {
                state.push(newState)
                dispatch({ type: 'GET_STATE', state })
            }
        }
        fetchData()
    }, [lang])
    return null
}
