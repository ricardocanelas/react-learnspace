import React, { Component } from 'react'
import { Container, Row, Column, Box } from './primitive'
import Responsively from './responsively'

/**
 * Configure breakpoints in any file which is being called
 * on the top aplication level (e.g. App.js, utils.js, etc.)
 */

Responsively.configureBreakpoints({
    xs: { min: '0em', width: '100%' },
    sm: { min: '48em', width: '49rem' },
    md: { min: '64em', width: '65rem' },
    lg: { min: '75em', width: '76rem' },
    hd: { min: '99em', width: '100rem' },
})

class App extends Component {
    render() {
        return (
            <Container>
                <h1 style={{ padding: '10px 0' }}>Example</h1>
                <Row>
                    <Column xs="12" sm="6" md="3">
                        <Box background="#757575">A</Box>
                    </Column>
                    <Column xs={1} sm={1 / 2} md={1 / 4}>
                        <Box background="#9e9e9e">B</Box>
                    </Column>
                    <Column xs="100%" sm="50%" md="25%" lg="50%">
                        <Box background="#bdbdbd">C</Box>
                    </Column>
                    <Column responsive={{ xs: '12', sm: '6', md: '3', lg: '12' }}>
                        <Box background="#e0e0e0">D</Box>
                    </Column>
                    <Column xs="12" sm="6" md="3" lg="8" hd="12">
                        <Box background="#eee">E</Box>
                    </Column>
                </Row>
                <div style={{ padding: '20px 0' }}>
                    Please check the lastest version in <br />
                    <a href="https://github.com/ricardocanelas/styled-responsive">
                        https://github.com/ricardocanelas/styled-responsive
                    </a>
                </div>
            </Container>
        )
    }
}

export default App
