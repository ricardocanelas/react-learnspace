import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import PropTypes from 'prop-types'
import Switch from './Switch'

const TOGGLE_CONTEXT = '__toggle__'

const ToggleOn = props => {
    const { on } = props.toggleContext
    return on ? props.children : null
}

const ToggleOff = props => {
    const { on } = props.toggleContext
    return on ? null : props.children
}

const ToggleButton = props => {
    const { on, onClick } = props.toggleContext
    return <Switch on={on} onClick={onClick} {...props} />
}

// HOC
export function withToggle(Component) {
    function Wrapper({ innerRef, ...props }, context) {
        const toggleContext = context[TOGGLE_CONTEXT]
        return <Component ref={innerRef} toggleContext={toggleContext} {...props} />
    }
    Wrapper.contextTypes = {
        [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
    }
    Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`
    return hoistNonReactStatics(Wrapper, Component)
}

class Toggle extends React.Component {
    static On = withToggle(ToggleOn)
    static Off = withToggle(ToggleOff)
    static Button = withToggle(ToggleButton)
    static childContextTypes = {
        [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
    }

    state = {
        on: this.props.on || false,
    }

    getChildContext() {
        return {
            [TOGGLE_CONTEXT]: {
                on: this.state.on,
                onClick: this.handleClick,
            },
        }
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
        return <div>{this.props.children || <Toggle.Button />}</div>
    }
}

Toggle.defaultProps = {
    onClick: on => {},
}

export default Toggle
