import React, { Component } from 'react';

const list = {
  e01: { title: 'HOC - Higher-Order Components', src: React.lazy(() => import('./examples/e01/index')) },
  e02: { title: 'Render Props', src: React.lazy(() => import('./examples/e02/index')) },
}

let SourceComponent = list.e01.src;

class App extends Component {

  state = {
    current: list.e01.src
  }

  handleSelect = (e) => {
    SourceComponent = list[e.target.value].src;
    this.setState({ current: list[e.target.value] })
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
    return (
      <div>
        <header>
          <div className="brand">
            Learnspace
          </div>
          <div className="nav">
            <select onChange={this.handleSelect}>
              <option value=''>-</option>
              {this.renderOptions()}
            </select>
          </div>
        </header>
        <div className="example-container">
          <React.Suspense fallback={<div>Loading...</div>}>
            <SourceComponent data={this.state.current} />
          </React.Suspense>
        </div>
      </div>
    );
  }
}

export default App;
