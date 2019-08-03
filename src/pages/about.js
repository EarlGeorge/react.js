import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

const Info = styled.section`
    position:relative;
    display: grid; 
    background: #ecf1f8;
    margin: 100px 20px;
    padding: 1px 30px;
    font-size: 25px;
    line-height: 1.5;
    letter-spacing: 0.8px;
`

const AboutPage = () => {

    const auth = useSelector(state => state.firebase.auth)
    if (!auth.uid) return <Redirect to='/auth' /> 

    return (
        <Info>
            <p>
                react.js with auth, unsplash images.
                Use chrome browser to see all the features..
                Supports voice interaction for search input. 
                Currently not too much but some other functionality may be integrated... 
                Check my github to see how everything is organized behind the scenes <span>: ) </span>
                also don't forget to Follow me & Star the repo, thanks. 
            </p>
        </Info>
    )
}

export default AboutPage


