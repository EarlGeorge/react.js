import styled from 'styled-components'

const Gallery = styled.div`

    .card {
        cursor: pointer;
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        animation: scale-out-hor-left 2.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) reverse forwards;
        overflow: hidden;
        letter-spacing: 0;
        text-decoration: none;
        background: whitesmoke;
        color: white;

        &:hover {
            background: rgb(49, 79, 92);
        }

        span {
            position: fixed;
            bottom: 10px;
            left: 45px;
        }

        span > img {
            position: inherit;
            width: 32px; 
            height: 32px;
            border-radius: 50%;
            bottom: 3px;
            left: 4px;
        }

        h1 {
            text-align: center;
            opacity: 0;
            z-index: 1;
            font-size: 22px;
            transition: all 1.2s
        }

        img {
            position: absolute;
            z-index: 0;
            transition: all 1.0s;
            width: 100%;
            height: 100%;
        }

        &:hover h1 {
            opacity: 1;
            letter-spacing: 5px;
        }

        &:hover img {
            opacity: 0.5;
            transform: scale(1.1,1.1);
        }

        &:hover span {
            opacity: 0;
            transition: all 0.4s
        }

        @keyframes scale-out-hor-left {
            0% {
                transform: scaleX(1);
                transform-origin: 0 0;
                opacity: 1;
            }
            100% {
                transform: scaleX(0);
                transform-origin: 0 0;
                opacity: 1;
            }
        }
    }

    .zoomIn {
        position: fixed;
        z-index: 1000;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 0;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.85);
    
        @media (max-width: 776px) {
            display: grid
        }
    
        img {
            cursor: pointer;
            position: absolute;
            width: 80%;
            height: 80%
        }

        span {
            visibility: hidden;
        }

        .close {
            position: fixed;
            color: white;
            top: 4%;
            right: 10%;
            font-size: 35px;
            font-weight: bold;
        
            &:hover {
                cursor: pointer;
                color: #999;
                text-decoration: none;
            }
        }
    }

    .hide {
        visibility: hidden
    }

`
export { Gallery }
