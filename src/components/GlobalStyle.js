import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SUIT-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

*{margin: 0; padding: 0; font-family: 'SUIT-Regular';}
ul{list-style: none}
a{text-decoration: none; color: #000;}
`
export default GlobalStyle