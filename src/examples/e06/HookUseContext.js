import React, { useContext } from 'react'

const defaultValue = { version: 1.1, theme: 'light' }
const AppContext = React.createContext(defaultValue)

const MyButton = props => {
    console.log('🍕 HookUseContext / MyButton | Render ')
    const context = useContext(AppContext)
    return (
        <button className={context.theme} {...props}>
            <span>(theme: {context.theme}) </span>
            {props.children}
        </button>
    )
}

function ExampleContext() {
    console.log('🍕 HookUseContext | Render')

    return (
        <div>
            <h2>Context</h2>
            <MyButton>Just a button</MyButton>
        </div>
    )
}

export default ExampleContext
