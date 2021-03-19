import styled from 'styled-components'

// wrapping Footer style :)
const Footer = styled.footer`
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(to right, #182338, #304864);
    padding: 3rem 0;
    color: rgb(255, 255, 255);

    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        opacity: 0.4;
        top: 0px;
    }
    
    h4{
        text-align:center;
        margin-bottom: 0;
    }
    
    .copyright {
       padding: 2rem 0;
       display: flex;
       flex-flow: row wrap;
       justify-content: center;
       align-items: center;
    }

`
export { Footer }
