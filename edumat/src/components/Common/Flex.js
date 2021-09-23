import styled from 'styled-components';

export const Flex = styled.div`
width: 100%;
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'space-between'};
flex-wrap: ${props => props.wrap || 'nowrap'};
`