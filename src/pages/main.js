import React, { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'
import { useSelector } from 'react-redux'


// this page is without components.. : ))

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const page = keyframes`
   0% { 
    transform: rotateY(45deg) rotateX(10deg) translate3d(100px,-50px,-200px); 
  }
  100% { 
    transform: rotateY(47deg) rotateX(14deg) translate3d(100px,-50px,-200px);
  }
`
const Gallery = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 100px;
  display: grid;
  grid-gap: 70px;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  align-content: center;
  justify-content: center;
  perspective: 3000px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 250px;
  background:linear-gradient(145deg, rgba(79, 97, 120,0.7) 70%, #ffffff 100%);
  box-shadow:120px 100px 250px #d9e7ff inset;
  /* Phone device */
  ${media.phone`  grid-template-columns: repeat(auto-fit, minmax(190px, 0fr)); grid-gap: 10px; width: 85%; overflow-x:hidden;  padding: 0 45px; perspective: 30000px;`}
`

const Image = styled.div`
  animation-name: ${page};
  animation-duration: 3s;
  animation-timing-function: cubic-bezier(.38,.38,.74,.84);
  animation-fill-mode: both;
  animation-iteration-count: none;
  animation-direction: forwards;
  padding: 25px 0;
`

const MainPage = () => {
  const [url, setUrl] = useState([])
  const random = Math.floor(Math.random() * 7)

  const endPoint = `https://api.unsplash.com/photos?page=${random}&per_page=30&order_by=latest&client_id=${process.env.REACT_APP_UNSPLASH_CLIENTID}`
  
  useEffect(() => {
    fetch(endPoint)
     .then(res => res.json())
     .then(data => setUrl(data))
  },[])
 
  const auth = useSelector(state => state.firebase.auth)
  if (auth.uid) return <Redirect to='/search' /> 

  return (
    <Gallery>
      {url.map((pic) => (
        <Image key={pic.id}>
          <img src={pic.urls.small} alt="Gallery"/>
        </Image>
      ))}
    </Gallery>
  )
}

export default MainPage

