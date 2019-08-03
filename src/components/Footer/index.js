import React from 'react'
import { Link } from 'react-router-dom'

import style from './footer.module.scss'

// import bg from '../../images/background.svg'

const footer = () => {
  return (
    <footer className={style.footer}>
      {/* <img src={bg} className={style.background} /> */}
      <div className={style.menu}>
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
      <div className={style.copyright}>
        Copyright © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  )
}

export default footer
