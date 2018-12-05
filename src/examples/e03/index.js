import React, { Component } from 'react'

import ThemeContext, { themes } from './contexts/theme'
import Button from './components/Button'
import Input from './components/Input'

class App extends Component {
    toggleTheme = () => {
        this.setState(state => ({
            ...state,
            storeTheme: {
                ...state.storeTheme,
                theme: state.storeTheme.theme === themes.dark ? themes.light : themes.dark,
            },
        }))
    }

    state = {
        storeTheme: {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        },
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.storeTheme}>
                <ThemeContext.Consumer>
                    {({ toggleTheme }) => <Button onClick={toggleTheme}>Change theme</Button>}
                </ThemeContext.Consumer>

                <hr />

                <Button>This is a button</Button>
                <div>
                    <label>Name:</label>
                    <Input defaultValue="this a input" />
                </div>
            </ThemeContext.Provider>
        )
    }
}

export default App
