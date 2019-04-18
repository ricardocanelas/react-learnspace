import React, { Component } from 'react'

import './style.scss'

const list = []

class App extends Component {
    state = {
        current: { id: '' },
    }

    handleClick = item => {
        console.log(item)
        this.setState({ screen: item })
    }

    handleChange = e => {
        const id = e.target.value
        const item = list.find(item => item.id === id)
        this.setState({ current: item })
    }

    renderCurrentComponent = () => {
        const current = this.state.current
        if (current.id === '') return <></>

        const Comp = current.component
        const className = ['wrapper-component', `id-${current.id}`].join(' ')

        return (
            <div className={className}>
                <Comp />
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Hooks</h2>
                <select onChange={this.handleChange} value={this.state.current.id}>
                    <option value="">- choose -</option>
                    {list.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.title}
                        </option>
                    ))}
                </select>

                {this.renderCurrentComponent()}
            </div>
        )
    }
}

export default App
