import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './header.module.scss'

const SignedOutLinks = () => {
  return (
      <ul>
        <li><NavLink exact to='/' activeClassName={style.activeButton}>Main</NavLink></li>
        <li><NavLink to='/auth' activeClassName={style.activeButton}>Sign IN</NavLink></li>
      </ul>
  )
}

export default SignedOutLinks