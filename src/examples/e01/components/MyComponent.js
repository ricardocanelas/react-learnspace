import React from 'react'
import { withCounter } from './Counter'

const MyComponent = props => {
    return (
        <div>
            Counter: {props.counter}
            <button onClick={props.increment}>+1</button>
        </div>
    )
}

export default withCounter(MyComponent)
