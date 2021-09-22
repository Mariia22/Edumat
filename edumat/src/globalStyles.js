import style, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
export const theme = {
    colors: {
        backgroundColor: '#FFFFFF',
        fontColor: '#C1C1C1',
        darkestFontColor: 'darkestgrey',
        headersColor: '#131330',
        fieldColor: '#F4F4F4',
        highlightColor: 'blackpearl',
        iconColor: '#3671FE'
    },
    media: {
        phone: "(max-width: 425px)"
    }
}
export default GlobalStyle
