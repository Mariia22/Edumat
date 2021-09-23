import styled from 'styled-components';

export const CardWrapper = styled.div`
width: 40%;
margin-bottom: 48px;
`

export const CardImage = styled.img`
width: 93px;
height: 93px;
margin-bottom: 24px;
`

export const CardHeader = styled.h2`
font-weight:bold;
font-size: 14px;
line-height: 16px;
margin-bottom: 8px;
color: ${props => props.color || props.theme.colors.headerColor};
`

export const CardText = styled.p`
font-weight:500;
font-size: 12px;
line-height: 16px;
color: ${props => props.color || props.theme.colors.fontColor};`