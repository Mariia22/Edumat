import React from 'react';
import styled, { css } from 'styled-components';


const ButtonStyle = styled.button`
width: 45%;
cursor: pointer;
border: none;
font-weight:600;
font-size: 14px;
line-height: 14px;
background: none;
${props => props.filter && css`
    width: 105px;
    height: 32px;
    color:${({ isActive }) => isActive ? '#FFFFFF' : '#7C7C7C'};
    background-color: ${({ isActive }) => isActive ? '#131330' : '#FFFFFF'};
    font-weight:400;
    font-size: 12px;
    line-height: 16px;
    border-radius: 100px;
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight}; 
    margin-bottom: 56px;   
`};
${props => props.filterCourse && css`
      color: ${({ isFilter }) => isFilter ? '#131330' : '#C1C1C1'};       
`}
`

const Button = (props) => {
    return (
        <ButtonStyle {...props} />
    )
}

export default Button