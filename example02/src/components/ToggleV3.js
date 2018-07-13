import React from 'react'
import PropTypes from 'prop-types'
import Switch from './Switch';

const TOGGLE_CONTEXT = '__toggle__'

const ToggleOn = withToggle(props => {
    return props.on ? props.children : null
})

const ToggleOff = withToggle(props => {
    return props.on ? null : props.children
})

const ToggleButton = withToggle(props => {
    const { on, onClick } = props
    return <Switch on={on} onClick={onClick} {...props} />
})

// HOC
export function withToggle(Component) {
    function Wrapper(props, context) {
        const toggleContext = context[TOGGLE_CONTEXT]
        return (
            <Component {...toggleContext} {...props} />
        )
    }
    Wrapper.contextTypes = {
        [TOGGLE_CONTEXT]: PropTypes.object.isRequired
    }
    return Wrapper
}

class Toggle extends React.Component {
    static On = ToggleOn
    static Off = ToggleOff
    static Button = ToggleButton
    static childContextTypes = {
        [TOGGLE_CONTEXT]: PropTypes.object.isRequired
    }

    state = {
        on: this.props.on || false
    }

    getChildContext() {
        return {
            [TOGGLE_CONTEXT]: {
                on: this.state.on,
                onClick: this.handleClick
            }
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            on: !prevState.on
        }), () => {
            this.props.onToggle(this.state.on)
        })
    }

    render() {
        return (
            <div>{this.props.children || <ToggleButton />}</div>
        )
    }
}

Toggle.defaultProps = {
    onClick: (on) => { }
}

export default Toggle

/**
 * <Toggle on={true} onToggle={(on) => console.log('On', on)}>
 *   <div style={{ backgroundColor: 'whitesmoke' }}>
 *      <Toggle.On>The Button is on</Toggle.On>
 *   </div>
 *   <Toggle.Off>The Button is off</Toggle.Off>
 *   <Toggle.Button />
 * </Toggle>
 */