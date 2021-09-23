import React from 'react';
import styled from 'styled-components';

const IconStyle = styled.img`
width: ${props => props.width || '30'};
height: ${props => props.height || '30'};
margin-left: 22px;
margin-right: 16px;
`


const Icon = (props) => {
    return (
        <IconStyle {...props} />
    )
}

export default Icon
