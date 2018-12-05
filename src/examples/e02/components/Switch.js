import React from 'react'

const Switch = props => {
    return (
        <div className="switch__container">
            <input className="switch switch--shadow" type="checkbox" checked={props.on} onChange={props.onClick} />
            <label onClick={props.onClick} />
        </div>
    )
}

Switch.defaultProps = {
    onClick: () => {},
}

export default Switch
