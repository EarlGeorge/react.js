import styled from 'styled-components'

// wrapping Footer style :)
const Footer = styled.footer`
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(to right, #182338, #304864);
    // border-top-right-radius: 50px; 
    // hokey pokey styling : ))
    z-index: 100;
    
    &::before {
        content: "";
        width: 142px;
        height: 142px;
        background: radial-gradient(rgba(255, 255, 255, 0)72%, #182338 73%);
        position: absolute;
        top: -141px;
        left: 0px;
        border-top-right-radius: 100%;
        border-top-left-radius: 100%;
        border-bottom-right-radius: 100%;
    }

    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        opacity: 0.4;
        top: 0px;
    }

    .menu {
        position: relative;
        top: 20px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    
        h1 {
            color:white;
            letter-spacing: 4px;
            font-size: 25px;
            padding: 0 40px;
            font-weight: bold
        }
        
        ul {
            list-style-type: none;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 1px;

            li {
                a {
                    text-decoration: none;
                    color: rgb(255, 255, 255);
                    &:hover {
                        text-decoration: underline;
                    }
                };
            }
        }
    }

    .copyright {
       padding: 4rem 0;
       color: rgb(255, 255, 255);
       display: flex;
       flex-flow: row wrap;
       justify-content: center;
       align-items: center;
    }

`
export {Footer}