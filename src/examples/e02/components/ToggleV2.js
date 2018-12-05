import React from 'react'
import PropTypes from 'prop-types'
import Switch from './Switch'

const TOGGLE_CONTEXT = '__toggle__'

function ToggleOn({ children }, context) {
    const { on } = context[TOGGLE_CONTEXT]
    return on ? children : null
}
ToggleOn.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
}

function ToggleOff({ children }, context) {
    const { on } = context[TOGGLE_CONTEXT]
    return on ? null : children
}
ToggleOff.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
}

function ToggleButton(props, context) {
    const { on, onClick } = context[TOGGLE_CONTEXT]
    return <Switch on={on} onClick={onClick} {...props} />
}
ToggleButton.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
}

class Toggle extends React.Component {
    static On = ToggleOn
    static Off = ToggleOff
    static Button = ToggleButton
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
        return <div>{this.props.children || <ToggleButton />}</div>
    }
}

Toggle.defaultProps = {
    onClick: on => {},
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
