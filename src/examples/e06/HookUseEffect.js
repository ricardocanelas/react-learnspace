import React, { useState, useEffect } from 'react'

// UseEffect
// ----------
// Mutations, subscriptions, timers, logging,
// and other side effects are not allowed inside the main body of a function component

function ExampleEffect() {
    const [count, setCount] = useState(0)

    // An empty array ([]) as a second argument
    // this tells React that your effect doesn’t depend on any values from props or state,
    // so it never needs to re-run.
    useEffect(() => {
        console.log('🥤 HookUseEffect | ComponentDidMount')
        return () => {
            console.log('🥤 HookUseEffect | ComponentWillUnmount')
        }
    }, [])

    useEffect(() => {
        console.log('🥤 HookUseEffect | Initialize an effect')
        const quantity = 3
        let i = 0

        const upHandler = () => {
            i++
            console.log('KeyUp', i)
        }
        window.addEventListener('keyup', upHandler)

        const interval = setInterval(() => {
            i++
            console.log('Interval', i, ` (${i} >= ${quantity})`, i >= quantity)
            if (i >= quantity) setCount(count + 1)
        }, 2000)

        return () => {
            console.log('🥤 HookUseEffect | Clean an effect')
            window.removeEventListener('keyup', upHandler)
            clearInterval(interval)
        }
    })

    console.log('🥤 HookUseEffect | Render')

    return <div>Effect {count}</div>
}

export default ExampleEffect
