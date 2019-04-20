import React, { useState, useReducer } from 'react'

const initialState = {
    list: [{ id: Date.now(), description: 'learn react' }],
}

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                list: [...state.list, { id: Date.now(), description: action.payload }],
            }
        case 'remove':
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload.id),
            }
        default:
            throw new Error()
    }
}

function ExampleReducer() {
    const [value, setValue] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log('🥫 HookUseReducer | Render ', value, state)

    const handleChange = e => setValue(e.target.value)

    const handleClick = () => {
        dispatch({ type: 'add', payload: value })
        setValue('')
    }

    const handleRemove = item => () => {
        dispatch({ type: 'remove', payload: item })
    }

    return (
        <div>
            <h2>UseReducer</h2>

            <input value={value} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>

            {state.list.map(item => (
                <div className="item" key={item.id}>
                    <div className="action">
                        <button onClick={handleRemove(item)}>remove</button>
                    </div>
                    <div className="description">{item.description}</div>
                </div>
            ))}
        </div>
    )
}

export default ExampleReducer
