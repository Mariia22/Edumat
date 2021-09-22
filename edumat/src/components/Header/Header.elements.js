import styled from 'styled-components';

export const HeaderDiv = styled.div`
width: 50px;
color: ${props => props.color || props.theme.colors.secondary};
background-color: ${props => props.color || props.theme.colors.primary};
@media ${props => props.theme.media.phone}{
    width: 100%;
}
`