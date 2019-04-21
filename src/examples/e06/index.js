import React, { Component } from 'react'

import HookUseState from './HookUseState'
import HookUseEffect from './HookUseEffect'
import HookUseContext from './HookUseContext'
import HookUseReducer from './HookUseReducer'
import HookUserCallback from './HookUseCallback'
import HookUseRef from './HookUseRef'
import HookUseFetch from './HookUseFetch'
import HookUseSlider from './HookUseSlider'

import './style.scss'

const list = [
    { id: 'h01', title: 'useState', component: HookUseState },
    { id: 'h02', title: 'useEffect', component: HookUseEffect },
    { id: 'h03', title: 'useContext', component: HookUseContext },
    { id: 'h04', title: 'useReducer', component: HookUseReducer },
    { id: 'h05', title: 'useCallback or useMemo', component: HookUserCallback },
    { id: 'h06', title: 'useRef', component: HookUseRef },
    { id: 'h07', title: 'custom: useFetch', component: HookUseFetch },
    { id: 'h08', title: 'custom: useSlider', component: HookUseSlider },
]

const config = localStorage.getItem('learnspace-config-e06')
    ? JSON.parse(localStorage.getItem('learnspace-config-e06'))
    : { selected: null }

class App extends Component {
    state = {
        current: { id: '' },
    }

    componentDidMount() {
        if (config.selected !== null) this.selectBy(config.selected)
    }

    selectBy = id => {
        const item = list.find(item => item.id === id)
        this.setState({ current: item })
        localStorage.setItem('learnspace-config-e06', JSON.stringify({ selected: id }))
    }

    handleChange = e => {
        const id = e.target.value
        this.selectBy(id)
    }

    renderCurrentComponent = () => {
        const current = this.state.current
        if (current.id === '') return <></>

        const Comp = current.component
        const className = ['wrapper-component', `id-${current.id}`].join(' ')

        return (
            <div className={className}>
                <Comp />
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Hooks</h1>
                <select onChange={this.handleChange} value={this.state.current.id}>
                    <option value="">- choose -</option>
                    {list.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.title}
                        </option>
                    ))}
                </select>

                {this.renderCurrentComponent()}
            </div>
        )
    }
}

export default App
