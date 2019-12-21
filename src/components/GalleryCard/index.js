import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Gallery } from './style'

const Index = (props) => {
  const { name, img, userInfo, userPic } = props

  const [change, setChange] = useState(false)
  
  //  click event
  const button = () => {
    setChange(!change)
  }

  // Zoom In/Out on click event.
  const applyStyle = change ? 'zoomIn' : 'card'
  // Add Close-icon when picture was zoomed.
  const CloseIcon = change ? 'close' : 'hide'

  return (
    <Gallery>
      <div className={applyStyle}>
        <div className={CloseIcon} onClick={button}>
          &times;
        </div>
        <h1>{name}</h1>
        <img src={img} alt={name} onClick={button} />
        <span><img src={userPic} alt="userPic" />{userInfo}</span>
      </div>
    </Gallery>
  )
}

Index.propTypes = {
  name: PropTypes.string,
}

export default Index
