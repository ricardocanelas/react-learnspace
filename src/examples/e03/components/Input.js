import React from 'react'
import { withTheme } from '../contexts/theme';
import styled  from 'styled-components'

const Input = styled.input`
  background: ${props => props.theme.background || '#whitesmoke'};
  color: ${props => props.theme.foreground || '#000'};
  border: 1px solid ${props => props.theme.input_border || '#ccc'};
  display: inline-block;
  font-weight: 400;
  text-align: left;
  white-space: nowrap;
  vertical-align: middle;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
`;

class InputComponent extends React.Component {
    render() {
        return (
            <Input {...this.props} />
        )
    }
}

export default withTheme(InputComponent)