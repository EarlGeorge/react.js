import React, { useState } from 'react'
import PropTypes from 'prop-types'

import style from './galleryCard.module.scss'

const  Index = (props) => {
  const { name, img, userInfo, userPic } = props
  const [change, setChange] = useState(false)

  const button = () => {
    setChange(!change)
  }

  // Zoom In/Out on click event.
  const applyStyle = change ? `${style.zoomIn}` : `${style.galleryCard}`
  // Add Close-icon when picture was zoomed.
  const CloseIcon = change ? `${style.close}` : `${style.hide}`

  return (
    <div className={applyStyle}>
      <div className={CloseIcon} onClick={button}>
        &times;
      </div>
      <h1>{name}</h1>
      <img src={img} alt={name} onClick={button} />
      <span><img src={userPic} alt="userPic"/>{userInfo}</span>
    </div>  
  )
}

Index.propTypes = {
  name: PropTypes.string,
}

export default Index
