import styled from 'styled-components';

export const WrapperStyle = styled.div`
    display: flex;
    color: ${props => props.color || props.theme.colors.fontColor};
    background-color: ${props => props.color || props.theme.colors.backgroundColor};
@media ${props => props.theme.media.phone}{
    flex-direction: column;
}
`
