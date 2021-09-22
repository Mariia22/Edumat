import { createGlobalStyle } from 'styled-components';
import MetropolisWoff from './fonts/Metropolis-Regular.woff';
import MetropolisWoff2 from './fonts/Metropolis-Regular.woff2';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Metropolis';
  font-style: normal;
  font-weight: 400;
  src: local('Metropolis'), local('Metropolis'),
  url(${MetropolisWoff2}) format('woff2'), 
  url(${MetropolisWoff}) format('woff')
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Metropolis';
}
`
export const theme = {
    colors: {
        backgroundColor: '#FFFFFF',
        fontColor: '#C1C1C1',
        darkestFontColor: '#7C7C7C',
        headersColor: '#131330',
        fieldColor: '#F4F4F4',
        iconColor: '#3671FE'
    },
    media: {
        phone: "(max-width: 425px)"
    }
}
export default GlobalStyle
