import React, { useState } from 'react'
import useFetch from './hooks/useFetch'

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
            <pre>
                {`
const [
    data, // ${data && '[1,..' + data.length + ']'}
    loading, // ${loading}
] = useFetch(${url})
            `}
            </pre>
        </div>
    )
}

export default ExampleFetch
