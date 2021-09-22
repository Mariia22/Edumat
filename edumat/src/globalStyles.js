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
        primary: 'grey',
        secondary: 'red'
    },
    media: {
        phone: "(max-width: 425px)"
    }
}
export default GlobalStyle
