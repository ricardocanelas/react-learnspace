import React from 'react'

const Currency = ({ code, label, weight, value, typed, coded, onChange }) => {
    const handleChange = e => {
        onChange(e.target.value, code, weight)
    }

    const formatValue = value => {
        return code === coded ? typed : (value * weight).toFixed(2)
    }

    return (
        <div className="currency">
            <label>{code}</label>
            <input value={formatValue(value)} onChange={handleChange} />
        </div>
    )
}

export default Currency
