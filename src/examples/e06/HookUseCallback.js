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

    const handleClick = useCallback(() => {
        setRandom1(randomNumber)
    }, [random1])

    return (
        <div>
            <h2>UseCallback</h2>
            {/*Optimize*/}
            <CompRandom label={`A-${random1}`} onClick={handleClick} />
            {/*Not-Optimize*/}
            <CompRandom
                label={`B-${random2}`}
                onClick={() => {
                    setRandom2(randomNumber())
                }}
            />
        </div>
    )
}

const CompRandom = React.memo(props => {
    console.log('🍧 HookUseCallback | Render', props.label)
    return <button onClick={props.onClick}>{props.label}</button>
})

export default ExampleCallback
