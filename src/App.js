import React, { Component } from 'react'
import loading from './loading.gif'

const list = {
    e01: { id: 'e01', title: 'HOC - Higher-Order Components', src: React.lazy(() => import('./examples/e01/index')) },
    e02: { id: 'e02', title: 'Render Props', src: React.lazy(() => import('./examples/e02/index')) },
    e03: { id: 'e03', title: 'Context', src: React.lazy(() => import('./examples/e03/index')) },
    e04: { id: 'e04', title: 'Lifting State Up', src: React.lazy(() => import('./examples/e04/index')) },
    e05: { id: 'e05', title: 'Responsive', src: React.lazy(() => import('./examples/e05/index')) },
    e06: { id: 'e06', title: 'Hooks', src: React.lazy(() => import('./examples/e06/index')) },
}

const config = localStorage.getItem('learnspace-config')
    ? JSON.parse(localStorage.getItem('learnspace-config'))
    : { selected: null }

let SourceComponent = config.selected ? list[config.selected].src : null

const Loading = () => {
    return (
        <div className="app-loading">
            <img alt="loading" src={loading} />
            <div>Loading...</div>
        </div>
    )
}

const Welcome = () => {
    return (
        <div className="app-welcome">
            <div className="title">Learnspace</div>
        </div>
    )
}

class App extends Component {
    state = {
        current: config.selected ? list[config.selected] : null,
    }

    handleSelect = e => {
        const item = list[e.target.value]
        SourceComponent = item ? item.src : SourceComponent
        this.setState({ current: item })
        localStorage.setItem('learnspace-config', JSON.stringify({ selected: e.target.value }))
    }

    renderOptions = () => {
        return Object.keys(list).map(key => {
            return (
                <option key={key} value={key}>
                    {list[key].title} ({})
                </option>
            )
        })
    }

    render() {
        const { current } = this.state
        const classes = ['example-container']
        if (current) classes.push(`app-${current.id}`)
        else classes.push('welcome')

        return (
            <React.Fragment>
                <header>
                    <div className="brand">Learnspace</div>
                    <div className="nav">
                        <select onChange={this.handleSelect} value={this.state.current ? this.state.current.id : null}>
                            <option value="">-</option>
                            {this.renderOptions()}
                        </select>
                    </div>
                </header>
                <div className={classes.join(' ')}>
                    {current && (
                        <React.Suspense fallback={<Loading />}>
                            <SourceComponent data={current} />
                        </React.Suspense>
                    )}
                    {!current && <Welcome />}
                </div>
            </React.Fragment>
        )
    }
}

export default App
