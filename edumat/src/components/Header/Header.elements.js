import styled from 'styled-components';

export const HeaderDiv = styled.div`
display: flex;
justify-content: space-between;
margin: 17px 17px 21px 24px;
`
export const HeaderLogo = styled.img`
width: 104px;
height: 21px;
`
export const HeaderIconDiv = styled.div`
width: 100%;
display: flex;
flex-wrap:wrap;
justify-content: flex-end;
align-items: center;
`
export const HeaderFilter = styled.div`
display: flex;
flex-wrap:wrap;
justify-content: space-evenly;
align-items: center;
width: 100%;
height:32px;
background-color: ${props => props.color || props.theme.colors.fieldColor};
`