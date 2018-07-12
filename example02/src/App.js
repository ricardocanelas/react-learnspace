import React, { Component } from 'react'
import Toggle from './components/ToggleV2'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Toggle on={true} onToggle={(on) => console.log('1-On', on)}>
                    <Toggle.On>The Button is on</Toggle.On>
                    <Toggle.Off>The Button is off</Toggle.Off>
                    <Toggle.Button />
                </Toggle>

                <hr/>

                <Toggle on={false} onToggle={(on) => console.log('2-On', on)}>
                    <div style={{ backgroundColor: 'whitesmoke' }}>
                        <Toggle.On>The Button is on</Toggle.On>
                    </div>
                    <Toggle.Off>The Button is off</Toggle.Off>
                    <Toggle.Button />
                </Toggle>

                <hr />

                <Toggle on={true} onToggle={(on) => console.log('3-On', on)} />
            </div>
        )
    }
}

export default App