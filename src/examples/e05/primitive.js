import React from 'react'
import styled from 'styled-components'
import Responsively from './Responsively'

// Container

const StyledContainer = styled.div`
    position: relative;
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    border: 1px solid #f5f5f5;

    ${props =>
        Responsively.helperMediaMap(props.brekpoints, breakpoint => {
            return 'width: ' + breakpoint['width'] + ';'
        })}
`

export const Container = props => {
    const brekpoints = Responsively.getBreakpointValues()
    return (
        <StyledContainer {...props} brekpoints={brekpoints}>
            {props.children}
        </StyledContainer>
    )
}

// Row

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Row = props => {
    return <StyledRow {...props}>{props.children}</StyledRow>
}

// Column

const StyledColumn = styled.div`
    width: ${props => (props.xs ? Responsively.mixins.width(props.xs) : '100%')};

    ${props =>
        Responsively.mediaMap(breakpoint => {
            if (props[breakpoint.id] !== undefined) {
                return `
                width: ${Responsively.mixins.width(props[breakpoint.id])};
            `
            }
            return ''
        })}
`

export const Column = props => {
    return (
        <StyledColumn {...props.responsive} {...Responsively.destructionProp(props)}>
            {props.children}
        </StyledColumn>
    )
}

// Box

const StyledBox = styled.div`
    padding: 5px;
    text-align: center;
    ${props => (props.background ? `background: ${props.background}` : '')}
`

export const Box = props => {
    return <StyledBox {...props}>{props.children}</StyledBox>
}
