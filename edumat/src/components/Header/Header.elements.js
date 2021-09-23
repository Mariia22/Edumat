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
display: flex;
justify-content: space-between;
align-items: center;
`
export const HeaderFilter = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
height:32px;
background-color: ${props => props.color || props.theme.colors.fieldColor};
`
export const HeaderFilterButton = styled.button`
width: 75px;
cursor: pointer;
border: none;
color: ${({ isActive }) => isActive ? '#131330' : '#C1C1C1'};
font-weight:600;
font-size: 14px;
line-height: 14px;
`