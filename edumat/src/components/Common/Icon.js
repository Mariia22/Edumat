import React from 'react';
import styled from 'styled-components';

const IconStyle = styled.img`
width: ${props => props.width || '30'};
height: ${props => props.height || '30'};
margin-left: ${props => props.marginLeft};
margin-right: ${props => props.marginRight};
`


const Icon = (props) => {
    return (
        <IconStyle {...props} />
    )
}

export default Icon
