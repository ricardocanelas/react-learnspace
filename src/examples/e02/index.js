import React, { Component } from 'react'
import Toggle from './components/ToggleV7'
import { withToggle } from './components/ToggleV7'

import './index.scss'

const MyToggle = withToggle(props => {
    return <button onClick={props.toggleContext.onClick}>{props.toggleContext.on ? 'on' : 'off'}</button>
})

class MySecondToggleRaw extends Component {
    static ToggleMessage = withToggle(props => {
        return props.toggleContext.on ? 'Warning: The button is toggled on' : null
    })
    render() {
        return (
            <div>
                <button onClick={this.props.on}>Do something</button>
                <button onClick={this.props.toggleContext.onClick}>{this.props.toggleContext.on ? 'on' : 'off'}</button>
            </div>
        )
    }
}
MySecondToggleRaw.displayName = 'MySecondToggle'
const MySecondToggle = withToggle(MySecondToggleRaw)

class App extends Component {
    render() {
        return (
            <div className="App">
                <Toggle on={true} onToggle={on => console.log('1-On', on)}>
                    <Toggle.On>The Button is on</Toggle.On>
                    <Toggle.Off>The Button is off</Toggle.Off>
                    <Toggle.Button />
                </Toggle>

                <hr />

                <Toggle
                    on={false}
                    onToggle={on => {
                        console.log('2-On', on)
                        console.log(this.myToggleRef)
                    }}
                >
                    <div style={{ backgroundColor: 'whitesmoke' }}>
                        <Toggle.On>The Button is on</Toggle.On>
                    </div>
                    <Toggle.Off>
                        The Button is off <MyToggle />
                    </Toggle.Off>
                    <Toggle.Button />
                    <MySecondToggle.ToggleMessage />
                    <MySecondToggle
                        innerRef={myToogle => (this.myToggleRef = myToogle)}
                        on={e => console.log(e.target.type)}
                    />
                </Toggle>

                <hr />

                <Toggle on={true} onToggle={on => console.log('3-On', on)} />
            </div>
        )
    }
}

export default App
