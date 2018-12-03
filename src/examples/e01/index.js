import React, { Component } from 'react';
import Counter from './components/Counter'
import MyComponent from './components/MyComponent';

import './index.css';

class App extends Component {

    render() {
        return (
            <div className="App">

                {/* Render Props */}
                <Counter render={({ counter, increment }) => (
                    <div>
                        Counter: {counter}
                        <button onClick={increment}>Add +1</button>
                    </div>
                )} />

                {/* HOC */}
                <MyComponent />
            </div>
        );
    }
}

export default App;
