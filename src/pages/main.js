import React, { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { breakPoints } from '../components/MediaType'
import { useSelector } from 'react-redux'

// this page is without components.. :)))

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
  display: grid;
  grid-gap: 70px;
  overflow: hidden;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  align-content: center;
  justify-content: center;
  perspective: 3000px;
  background:linear-gradient(145deg, rgba(79, 97, 120,0.7) 70%, #ffffff 100%);
  box-shadow:120px 100px 250px #d9e7ff inset;

  /* Phone device */
  @media ${breakPoints.phone} {
    grid-template-columns: repeat(auto-fit, minmax(190px, 0fr)); 
    grid-gap: 10px; 
    padding: 0; 
    perspective: 30000px;
  }
`

const Image = styled.div`
  padding: 0 100px;
  margin: 0 100px;
  animation-name: ${page};
  animation-duration: 3s;
  animation-timing-function: cubic-bezier(.38,.38,.74,.84);
  animation-fill-mode: both;
  animation-iteration-count: none;
  animation-direction: forwards;
  padding: 25px 0;
  
  /* Phone device */
  @media ${breakPoints.phone} {
    margin: 20px;
    padding: 0; 
  }
`

const MainPage = () => {
  const [url, setUrl] = useState([])
  const random = Math.floor(Math.random() * 7)

  const endPoint = `https://api.unsplash.com/photos?page=${random}&per_page=30&order_by=latest&client_id=${process.env.REACT_APP_UNSPLASH_CLIENTID}`

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    fetch(endPoint, { signal })
      .then(res => res.json())
      .then(data => setUrl(data))
      .catch(err => console.log(err))

    // clean up
    return () => controller.abort()
  }, [])

  const auth = useSelector(state => state.firebase.auth)
  if (auth.uid) return <Redirect to='/search' />

  return (
    <Gallery>
      {url.map((pic) => (
        <Image key={pic.id}>
          <img src={pic.urls.small} alt="Gallery" />
        </Image>
      ))}
    </Gallery>
  )
}

export default MainPage

