import React from 'react'
import ThemeContext from '../contexts/theme'
import styled from 'styled-components'

const Button = styled.button`
    background: ${props => props.theme.background || '#ccc'};
    color: ${props => props.theme.foreground || '#000'};
    border: 1px solid ${props => props.theme.border || '#ccc'};
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    cursor: pointer;
`

class ButtonComponent extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        return prevProps.theme !== this.props.theme
        // Previous ThemeContext value is prevProps.theme
        // New ThemeContext value is this.props.theme
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <Button {...this.props} theme={theme}>
                        {this.props.children}
                    </Button>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default ButtonComponent
