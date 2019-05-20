import React, { useState, useContext, useReducer, useMemo } from 'react'

const CountContext = React.createContext()

export function CountProvider(props) {
    const [count, setCount] = useState(0)
    const value = useMemo(() => [count, setCount], [count])
    return <CountContext.Provider value={value} {...props} />
}

export function useCount() {
    const context = useContext(CountContext)
    if (!context) {
        throw new Error(`useCount must be used within a CountProvider`)
    }
    return context
}

// ----------------- with Reducer ----------------------

function countReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT': {
            return { count: state.count + 1 }
        }
        default: {
            throw new Error(`Unsupported action type: ${action.type}`)
        }
    }
}

export function CountProviderReducer(props) {
    const [state, dispatch] = useReducer(countReducer, { count: 0 })
    const value = useMemo(() => [state, dispatch], [state])
    return <CountContext.Provider value={value} {...props} />
}

export function useCountReducer() {
    const context = useContext(CountContext)
    if (!context) {
        throw new Error(`useCount must be used within a CountProvider`)
    }
    const [state, dispatch] = context

    const increment = () => dispatch({ type: 'INCREMENT' })

    /* Using like thunk
     * const increment = () => {
     *     dispatch({ type: 'INCREMENT_REQUEST' })
     *     service.increment()
     *        .then(() => dispatch({ type: 'INCREMENT_RECEIVE' })
     *        .catch(err => dispatch({ type: 'INCREMENT_FAILURE', payload: err })
     * }
     **/

    return {
        state,
        dispatch,
        actions: {
            increment,
        },
    }
}
