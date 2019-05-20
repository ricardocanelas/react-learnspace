import React from 'react'
import { useCount, CountProvider } from './contexts/count'
import { useCountReducer, CountProviderReducer } from './contexts/count'

const Counter = function() {
    const [count, setCount] = useCount()
    const increment = () => setCount(c => c + 1)
    return <button onClick={increment}>{count}</button>
}

const CountDisplay = function() {
    const [count] = useCount()
    return <div>The current counter count is {count}</div>
}

// ---

const CounterReducer = function() {
    const { state, actions } = useCountReducer()
    return <button onClick={actions.increment}>{state.count}</button>
}

const CountDisplayReducer = function() {
    const { state } = useCountReducer()
    return <div>The current counter count is {state.count}</div>
}

function ExampleContext2() {
    console.log('🍕🍕 HookUseContext2 | Render')

    return (
        <div>
            <h2>Context 2</h2>
            <CountProvider>
                <CountDisplay />
                <Counter />
            </CountProvider>
            <hr />
            <CountProviderReducer>
                <CountDisplayReducer />
                <CounterReducer />
            </CountProviderReducer>
        </div>
    )
}

export default ExampleContext2
