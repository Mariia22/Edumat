import React from 'react';
import styled from 'styled-components';
import SearchIcon from './../../images/SearchIcon.svg';

const InputStyle = styled.input`
width: ${props => props.width || '240px'};
height: ${props => props.height || '48px'};
background-color: ${props => props.theme.colors.fieldColor};
border: none;
padding: 16px;
margin-bottom: 16px;
border-radius:15px;
font-size: 12px;
::placeholder{
color: ${props => props.color || props.theme.colors.darkestFontColor};
}
${props => props.search && `
    background: ${props.theme.colors.fieldColor} url(${SearchIcon}) 200px 16px no-repeat;
`}
`


const Input = (props) => {
    return (
        <InputStyle {...props} />
    )
}

export default Input