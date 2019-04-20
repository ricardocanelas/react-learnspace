import React, { useState } from 'react'

function ExampleState() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Hook')

    const handleChange = e => {
        setName(e.target.value)
    }

    console.log('🍺 HookUseState | Render', `props: ${count}, ${name}`)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>

            <hr />

            <label>Name:</label>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    )
}

export default ExampleState
