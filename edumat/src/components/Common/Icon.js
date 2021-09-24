import React from 'react';
import styled from 'styled-components';

const IconStyle = styled.img`
width: ${props => props.width || '30px'};
height: ${props => props.height || '30px'};
margin-left: ${props => props.marginLeft};
margin-right: ${props => props.marginRight};
margin-top: ${props => props.marginTop};
`


const Icon = (props) => {
    return (
        <IconStyle {...props} />
    )
}

export default Icon
