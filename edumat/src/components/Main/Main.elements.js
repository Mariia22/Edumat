import styled from 'styled-components';

export const MainWrapper = styled.div`
margin: 32px 25px 5px;
`
export const MainHeader = styled.h1`
font-weight: 600;
font-size: 24px;
line-height: 24px;
margin: 0 0 24px 0;
color: ${props => props.color || props.theme.colors.headerColor};
`
export const MainForm = styled.form`
display: flex;
flex-direction: column;
`
