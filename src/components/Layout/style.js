import { createGlobalStyle } from 'styled-components'

// const color1 = '#a7bfe8'
// const color2 = '#f2f3f9'
// const color3 = '#ecf1f8'
// const color4 = '#394456'
// const color5 = '#55595c'
// const color6 = '#32323e'
// const color7 = '#283e51'
// const color8 = '#4b79a1'
// const color9 = '#394456'

// how about ten ? pick up your color.

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat');

    body, html {
        position: relative;
        background: white;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        font-family: 'Montserrat', sans-serif;
        
        // -ms-overflow-style: scrollbar;
        // -webkit-text-size-adjust: 100%;
        // -ms-text-size-adjust: 100%;
    }

    div:nth-child(2)  {
        position: relative;
        height: 100%;
    }

    /* Used for sticky footer */
    .layout {
        min-height: calc(100vh - 20px);
    }

    /* used for cool navbar:'Header Component' overlay Layout change */
    .changesize {
        transition: transform 0.5s;
    }

    /* cool animation for Header NavBar resize. applies to {children} Layout's <main> element */
    .children {
        transition: all 2.5s;
        transform: scale(0.8);
    }

/* 
    .container {
        width: 100%;
        height: 100%;
        position: relative;
        padding-right: 0;
        padding-left: 0;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 576px) {
        .container {
            max-width: 540px;
        }
    }

    @media (min-width: 768px) {
        .container {
            max-width: 720px;
        }
    }

    @media (min-width: 992px) {
        .container {
            max-width: 960px;
        }
    }

    @media (min-width: 1200px) {
        .container {
            max-width: 1140px;
        }
    } 
*/

`

export {GlobalStyle}