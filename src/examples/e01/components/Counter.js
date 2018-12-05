import React from 'react'

// A class using 'Render Props' pattern
class Counter extends React.Component {
    state = {
        counter: 0,
    }

    increment = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }))
    }

    decrement = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1,
        }))
    }

    render() {
        const { increment, decrement } = this
        return (
            <div className="counter-container">
                {this.props.render({ increment, decrement, counter: this.state.counter })}
            </div>
        )
    }
}

// Higher-Order Component
export const withCounter = Component => props => {
    return <Counter render={counterData => <Component {...props} {...counterData} />} />
}

// or
export const withCounterClass = Component => {
    return class extends React.Component {
        render() {
            return <Counter render={counterData => <Component {...this.props} {...counterData} />} />
        }
    }
}

export default Counter
