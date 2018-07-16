import React from 'react'

export const themes = {
    light: {
        name: 'light',
        foreground: '#212529',
        background: '#f8f9fa',
        border: '#f8f9fa',
        input_border: '#e0e0e0',
    },
    dark: {
        name: 'dark',
        font: 'font: 400 13.3333px Arial',
        foreground: '#ffffff',
        background: '#343a40',
        border: '#343a40',
        input_border: '#343a40',
    },
}

export const Context = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { }
})

export const withTheme = (Component) => (props) => {
    return (
        <Context.Consumer>
            {({ theme }) => (
                <Component {...props} theme={theme} />
            )}
        </Context.Consumer>
    )
}

export default Context;