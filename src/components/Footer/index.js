import React from 'react'
import { Footer } from './style'

const footer = () => {
  return (
    <Footer>
      <h4>Created with ❤️‍ in საქართველო</h4>
      <div className='copyright'>
        © 2019 - {new Date().getFullYear()}
      </div>
    </Footer>
  )
}

export default footer
