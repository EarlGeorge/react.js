import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { breakPoints } from '../components/MediaType'

// Components
import SearchBar from '../components/SearchBar'
import GalleryCard from '../components/GalleryCard'


const TopS = styled.div`
  position: relative;
  top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  /* Phone device */
  @media ${breakPoints.phone} {
    font-size: 12px;
  }
`
const GalleryGrid = styled.section`
  position: relative;
  width: 100%;
  margin: 180px 0px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(370px, 0fr));
  grid-auto-rows: 600px;
  align-content: center;
  justify-content: center;
  /* Phone device */
  @media ${breakPoints.phone} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 0fr)); 
    grid-auto-rows: 400px;
  }
`

const SearchPage = () => {
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);

  const endPoint = `https://api.unsplash.com/search/photos?query=${value}&per_page=100&client_id=${process.env.REACT_APP_UNSPLASH_CLIENTID}`

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    axios.get(endPoint, { signal })
      .then(res => setImages(res.data.results))
      .catch(err => console.log(err))

    if (!signal.aborted) {
      speech()
    }

    // clean up
    return () => controller.abort()
  }, [value])

  //  typing Input 
  const onTextChange = (e) => setValue(e.target.value);

  //  speech Input 
  const speech = () => {
    if (value.length == 0) {

      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!SpeechRecognition) {
        console.error('This browser does not support the Web-Speech-API');
        return false;
      }

      let recognition = new SpeechRecognition();
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.addEventListener('result', (e) => {

        let transcript = [...e.results]
          .map(result => result[0].transcript)
          .join('')
        setValue(transcript)
        console.log(e.results)
      })

      recognition.addEventListener('end', recognition.end)
      recognition.start()
    }
  }


  const auth = useSelector(state => state.firebase.auth)
  if (!auth.uid) return <Redirect to='/auth' />

  return (
    <>
      <TopS>
        <SearchBar fireChange={onTextChange} searching={value} />
      </TopS>
      <GalleryGrid>
        {images.map((img) => (
          <GalleryCard
            key={img.id}
            name={img.alt_description || img.description}
            img={img.urls.regular}
            userInfo={img.user.name}
            userPic={img.user.profile_image.medium}
          />
        ))}
      </GalleryGrid>
    </>
  )
}

export default SearchPage

