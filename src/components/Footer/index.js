import React from 'react'
import { Link } from 'react-router-dom'

import { Footer } from './style'

// import bg from '../../images/background.svg'

const footer = () => {
  return (
    <Footer>
      {/* <img src={bg} className='background' /> */}
      <div className='menu'>
        <div>
          <h1>About</h1>
          <ul>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <a href="https://www.georgee.co.uk" target="_blank" rel="noopener noreferrer" >Blog and News</a>
            </li>
          </ul>
        </div>
        <div>
          <h1>General</h1>
          <ul>
            <li>
              <Link to="">Terms of Use</Link>
            </li>
            <li>
              <Link to="">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='copyright'>
        Copyright © {new Date().getFullYear()} All rights reserved.
      </div>
    </Footer>
  )
}

export default footer
