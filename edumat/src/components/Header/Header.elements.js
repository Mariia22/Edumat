import styled from 'styled-components';

export const HeaderDiv = styled.div`
display: flex;
justify-content: space-between;
margin: 13px 17px 17px 25px;
`
export const HeaderLogo = styled.img`
margin-top: 4px;
width: 104px;
height: 21px;
`

export const HeaderFilter = styled.div`
display: flex;
flex-wrap:wrap;
justify-content: center;
align-items: center;
width: 100%;
height:32px;
background-color: ${props => props.color || props.theme.colors.fieldColor};
`