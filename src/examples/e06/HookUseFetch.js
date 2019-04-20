import React, { useState, useEffect, useReducer } from 'react'

const initialValues = { result: null, pending: true }

const useFetchReducer = function(state, action) {
    switch (action.type) {
        case 'reset':
            return initialValues
        case 'result':
            return { result: action.payload, pending: false }
        default:
            throw new Error(`unexpected action type: ${action.type}`)
    }
}

const useFetch = url => {
    const [state, dispatch] = useReducer(useFetchReducer, initialValues)

    useEffect(() => {
        console.log('▪ UseFetch | Effect (did-mount)')

        let mounted = true
        let dispatchSafe = action => dispatch(action)
        const abortController = new AbortController()

        dispatchSafe({ type: 'reset' })
        setTimeout(() => {
            if (!mounted) return
            fetch(url, {
                signal: abortController.signal,
            })
                .then(res => res.json())
                .then(data => {
                    if (mounted) {
                        dispatchSafe({ type: 'result', payload: data })
                    }
                })
        }, 1000)

        return () => {
            console.log('▪ UseFetch | Effect (did-unmount) ')
            dispatchSafe = () => null // avoid to dispatch after stopped
            mounted = false
            abortController.abort()
        }
    }, [url])

    console.log('▪ UseFetch | Render')
    return [state.result, state.pending]
}

function ExampleFetch() {
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos')
    const [data, loading] = useFetch(url)

    console.log('\n')
    console.log('🔘 HookFetch | Render', data, loading)

    return (
        <div>
            <h2>Custom: UseFetch</h2>
            <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos')}>/Todos</button>
            <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/posts')}>/Posts</button>
            <br />
            Fetching: {url}
            <br />
            {loading ? 'Loading...' : `There are ${data.length} items`}
        </div>
    )
}

export default ExampleFetch
