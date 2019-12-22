import styled from 'styled-components'

const Header = styled.header`

    position: fixed;
    height: 60px;
    width: 100%;
    top:0;
    background: rgba(65,90,115,0.9);
    z-index: 1000;
  
    .container {
        width: 90%;
        padding-right: 0;
        padding-left: 0;
        margin-right: auto;
        margin-left: auto;
    }
    
    @media (max-width: 576px) {
        .container {
            max-width: 540px;
        }
    }

    @media (max-width: 768px) {
        .container {
            max-width: 720px;
        }

        .initialNav {
            visibility: hidden;
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

    .logo {
        position: relative;
        top: 7px;
        width: 60px;
        animation: logo-spin infinite 10s linear;
    }

    @keyframes logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    /* initial NavBar */
    .initialNav {
        display: flex;
        justify-content: flex-end;
    
        ul {
            display: flex;
        }

        li {
            position: relative;
            display: block;
            margin-right: 45px;
            font-size: 1.5rem;
            margin-top: -50px;
        }

        li::after {
            content: '';
            display: block;
            margin-top: 9%;
            width: 0;
            height: 3.1%;
            background: white;
            transition: all 250ms;
        }
        
        li:hover::after {
            width: 100%;
        }

        a {
            color: #d1dce6;
            text-decoration: none;
            text-align: center;

            &:hover{
                color: white;
            }
        }
        
        .activeButton {
            color: white;
            border-bottom: 0.5px solid white;
            padding-bottom: 10%
        }
    }


    @media (max-width: 768px) {
        
        /* hamburger button initial = Small Screen */
        .hamburger {
            position: relative;
            top:-30px;
            left: 90%;
            z-index: 1000;
            width: 2.5em;
            height: 2.5em;
        
            
            &:hover {
                cursor: pointer;
            }
            
            div {
                display: block;
                width: 100%;
                height: 0.1875em;
                background: black;
                border-radius: 0.5em;
                margin-bottom: 0.5em;
                transition: width 0.25s ease-in-out;
                
                &:nth-child(2){
                    width: 70%;
                }
        
                &:last-child{
                    margin-bottom: 0;
                    width: 30%;
                }
            }

            &:hover div {
                width: 100%;
            }

            /* on active hamburger button-X  */
            &.hamburgerActive div {
                position: inherit;
                left: 10px;
                bottom: 5px;
                background: white;

                &:first-child{
                    width: 100%;
                    transition: 1s;
                    transform: rotate(-45deg) translate(-15px, 5px);
                }
                &:nth-child(2){
                    width: 100%;
                    transition: transform 1s;
                    opacity: 0;
                    animation: change-opacity 1.1s;
                    transform: translate(30px, 0px);
                }
                &:last-child{
                    width: 100%;
                    transition: 1s;
                    transform: rotate(45deg) translate(-10px, -1px);
                }
            }
        }
        
        /* initial Overlay navbar 'before transition' */
        .overlay {
            top: 0;
            right: 0;
            bottom: 0;
            left: 3%;
            height: 0;
            opacity: 0.8;
            width: 94%;
        }
        
        /* active Overlay navbar */
        .overlayActive {
            position: fixed;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 1;
            z-index: 800;
            visibility: visible;
            background: rgba(0, 0, 0, 0.657); 
            transition: all 1.8s ease-in-out;
            
            ul {
                display: flex;
                flex-flow: column wrap;
                justify-content: center;
                align-items: center;
                animation: scale-up-ver-center 2.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
                font-size: 2.4em;
                line-height: 2.1;
                list-style-type: none;

                li {
                    .activeButton {
                        color: white;
                    }
                    a {
                        text-decoration: none;  
                        color: rgb(129, 162, 184);
                        transition: color 0.1s ease-in-out;
                        
                        &:hover{
                            color: #ecf1f8;
                        }
                    }
                }
            }
        }

        @keyframes change-opacity {
            0% {
                opacity: 0;
            }
            1% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }

        @keyframes scale-up-ver-center {
            0% {
                transform: scale(0.5);
                transform: scaleY(2.0);
                opacity: 0
            }
            100% {
                transform: scale(1);
                transform: scaleY(1);
                opacity: 1;
            }
        }
    }

`

export { Header }