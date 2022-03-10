import { useState } from 'react'

export default function Page({ ...props }) {
    const fields = [{ value: '4' }, { value: '3' }]

    const [formState, setFormState] = useState(fields)

    function setSelectedOption(value, index) {
        const state = [...formState]
        state[index].value = value
        setFormState(state)
    }

    function addOption() {
        const options = [...formState]
        options.push({
            value: '',
        })
        setFormState(options)
    }

    function removeOption(index) {
        const options = [...formState]
        console.log(JSON.stringify(options))
        console.log(index)
        options.splice(index, 1)
        console.log(JSON.stringify(options))
        setFormState(options)
    }

    function Select(props) {
        const index = props.index
        const currentValue = formState[index].value
        return (
            <div className="flex w-screen items-center">
                <select
                    onChange={(e) => {
                        setSelectedOption(e.target.value, index)
                    }}
                    value={currentValue}
                    className="w-20 m-4"
                >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button
                    className="block w-56 h-10 m-10 cursor-pointer bg-red text-white"
                    onClick={() => {
                        addOption()
                    }}
                >
                    add
                </button>
                <button
                    className="block w-56 h-10 m-10 cursor-pointer bg-red text-white"
                    onClick={() => {
                        removeOption(index)
                    }}
                >
                    remove
                </button>
                <div>{JSON.stringify(formState)}</div>
            </div>
        )
    }

    function Selects() {
        return formState.map((select, index) => {
            return (
                <Select key={index} value={select.value} index={index}></Select>
            )
        })
    }

    return (
        <>
            <h1>This is the digital advertising page</h1>
            <Selects></Selects>
        </>
    )
}
