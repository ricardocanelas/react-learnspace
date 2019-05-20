import React, { useState, useCallback } from 'react'

/*
 * Use the useCallback when you pass a prop as a function
 * and then you can decide if the function as change or not
 *
 * useCallback(fn, deps) === useMemo(() => fn, deps)
 */

const randomNumber = function() {
    return Math.round(Math.random() * 1000)
}

const ExampleCallback = () => {
    const [random1, setRandom1] = useState(1)
    const [random2, setRandom2] = useState(2)
    const [random3, setRandom3] = useState(3)

    const rand = Math.random()

    const handleClick = useCallback(() => {
        console.log(`rand (${rand})  (same value)`)
        setRandom1(randomNumber)
    }, [rand])

    console.log('🍧 HookUseCallback | Render')

    return (
        <div>
            <h2>UseCallback</h2>

            {/*Optimize*/}
            <CompRandom label={`A-${random1}`} onClick={handleClick} />

            {/*Not-Optimize*/}
            <CompRandom
                label={`B-${random2}`}
                onClick={() => {
                    console.log(`rand (${rand}) (always a new value)`)
                    setRandom2(randomNumber())
                }}
            />

            {/*Not-Optimize*/}
            <CompRandom
                label={`C-${random3}`}
                onClick={() => {
                    console.log(`rand (${rand}) (always a new value)`)
                    setRandom3(randomNumber())
                }}
            />
        </div>
    )
}

const CompRandom = React.memo(props => {
    console.log('🍧 HookUseCallback | Render | CompRandom | ', props.label)
    return <button onClick={props.onClick}>{props.label}</button>
})

export default ExampleCallback
