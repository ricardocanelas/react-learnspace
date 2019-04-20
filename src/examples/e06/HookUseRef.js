import React, { useRef } from 'react'

function ExampleRef() {
    console.log('💙 HookUseRef | Render')

    const inputEl = useRef(null)
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        console.log(inputEl)
        inputEl.current.focus()
    }
    return (
        <div>
            <h2>UseRef</h2>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    )
}

// -------------
// without hook
// -------------
/*
class Comp extends React.Component {
    textInput = React.createRef();
    render() {
        return <input ref{this.textInput} />
    }
}
*/

export default ExampleRef
