import styled from 'styled-components';

export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 47%;
margin-right: 4px;
margin-bottom: 45px;
`

export const CardImage = styled.img`
width: 93px;
height: 93px;
transform: rotate(${props => props.degree}deg);
transform: scaleX(${props => props.scaleX});
transform: scaleY(${props => props.scaleY});
`
export const CardDescription = styled.div`
display:flex;
height:50%;
flex-direction: column;
justify-content: flex-start;
`

export const CardHeader = styled.h2`
font-weight:bold;
font-size: 14px;
line-height: 16px;
margin-top:12px;
margin-right: 8px;
margin-bottom: 8px;
color: ${props => props.color || props.theme.colors.headerColor};
`

export const CardText = styled.p`
font-weight:500;
font-size: 12px;
line-height: 16px;
color: ${props => props.color || props.theme.colors.fontColor};`

export const CardIcon = styled.div`
background-color: #F0F0F0;
width: 25px;
height: 3px;
margin-top:16px;
margin-bottom:16px;
`