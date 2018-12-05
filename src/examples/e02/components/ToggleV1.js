import React from 'react'
import Switch from './Switch'

function ToggleOn({ on, children }) {
    return on ? children : null
}

function ToggleOff({ on, children }) {
    return on ? null : children
}

function ToggleButton({ on, onClick, ...props }) {
    return <Switch on={on} onClick={onClick} {...props} />
}

class Toggle extends React.Component {
    static On = ToggleOn
    static Off = ToggleOff
    static Button = ToggleButton

    state = {
        on: this.props.on || false,
    }

    handleClick = () => {
        this.setState(
            prevState => ({
                on: !prevState.on,
            }),
            () => {
                this.props.onToggle(this.state.on)
            }
        )
    }

    render() {
        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { on: this.state.on, onClick: this.handleClick })
        })
        return <div>{children}</div>
    }
}

Toggle.defaultProps = {
    onClick: on => {},
}

export default Toggle

/**
 * <Toggle on={true} onToggle={(on) => console.log('On', on)}>
 *   <Toggle.On>The Button is on</Toggle.On>
 *   <Toggle.Off>The Button is off</Toggle.Off>
 *   <Toggle.Button />
 * </Toggle>
 */
