import React, { useState } from 'react'
import { useDebounceCallback, useDebounce } from './hooks/useDebounce'

const ExampleDebounceCallback = () => {
    const [value, setValue] = useState(0)
    const [result, setResult] = useState(0)

    const [fn, cancel] = useDebounceCallback(
        valor => {
            setResult(valor)
        },
        1500,
        []
    )

    const handleClick = () => {
        const newValue = value + 1
        setValue(newValue)
        fn(newValue)
    }

    console.log('👀 HookUseDebounce (callback) | Render ', `value: ${value}, result: ${result}`)

    return (
        <div>
            <h2>UseDebounceCallback</h2>
            <button onClick={handleClick}>+1</button>
            <button onClick={cancel}>cancel</button>
            <br />
            <small>(delay: 1.5 seconds)</small>
            <br />
            Result: {result}
        </div>
    )
}

const ExampleDebounceInput = () => {
    const [name, setName] = useState('')
    const [result, cancel] = useDebounce(name, 1500)

    const handleChange = e => {
        setName(e.target.value)
    }

    console.log('👁 HookUseDebounce (input) | Render ', `name: ${name}, result: ${result}`)

    return (
        <div>
            <h2>UseDebounceInput</h2>
            <input defaultValue={name} onChange={handleChange} />
            <button onClick={cancel}>cancel</button>
            <br />
            Result: {result}
        </div>
    )
}

const ExampleDebounce = () => {
    return (
        <div>
            <ExampleDebounceCallback />
            <hr />
            <ExampleDebounceInput />
        </div>
    )
}

export default ExampleDebounce
