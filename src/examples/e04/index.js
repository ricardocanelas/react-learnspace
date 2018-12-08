import React, { Component } from 'react'
import Currency from './Currency'

import './style.scss'

class App extends Component {
    state = {
        currency: {
            value: 128.21,
            typed: '128.21',
            coded: null,
        },
    }

    handleChange = (value, code, weight) => {
        const isValid = /^[0-9]+(\.[0-9]{0,})?$/.test(value) // https://www.regextester.com/97725
        const final = parseFloat(value) / weight

        if (!isValid) return

        this.setState({
            currency: {
                value: final,
                typed: value,
                coded: code,
            },
        })
    }

    render() {
        const currency_props = {
            coded: this.state.currency.coded,
            typed: this.state.currency.typed,
            value: this.state.currency.value,
            onChange: this.handleChange,
        }

        return (
            <div>
                <h1>Currencies</h1>
                <small>(2018-12-07)</small>
                <Currency code="GBP" weight={0.78} {...currency_props} />
                <Currency code="EUR" weight={0.88} {...currency_props} />
                <Currency code="USD" weight={1.0} {...currency_props} />
                <Currency code="CAD" weight={1.33} {...currency_props} />
                <Currency code="AUD" weight={1.39} {...currency_props} />
                <Currency code="BRL" weight={3.91} {...currency_props} />
                <Currency code="CNY" weight={6.87} {...currency_props} />
                <Currency code="JPY" weight={112} {...currency_props} />
            </div>
        )
    }
}

export default App
