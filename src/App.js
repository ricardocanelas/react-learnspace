import React, { Component } from 'react'
import loading from './loading.gif'

const list = {
    e01: { id: 'e01', title: 'HOC - Higher-Order Components', src: React.lazy(() => import('./examples/e01/index')) },
    e02: { id: 'e02', title: 'Render Props', src: React.lazy(() => import('./examples/e02/index')) },
    e03: { id: 'e03', title: 'Context', src: React.lazy(() => import('./examples/e03/index')) },
    e04: { id: 'e04', title: 'Lifting State Up', src: React.lazy(() => import('./examples/e04/index')) },
}

let SourceComponent

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
        current: null,
    }

    handleSelect = e => {
        const item = list[e.target.value]
        SourceComponent = item ? item.src : SourceComponent
        this.setState({ current: item })
    }

    renderOptions() {
        return Object.keys(list).map(key => {
            return (
                <option key={key} value={key}>
                    {list[key].title}
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
                        <select onChange={this.handleSelect}>
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
