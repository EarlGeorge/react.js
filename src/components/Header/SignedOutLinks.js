import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul>
      <li>
        <NavLink exact to='/' activeClassName="activeButton">Main</NavLink>
      </li>
      <li>
        <NavLink to='/auth' activeClassName="activeButton">Sign IN</NavLink>
      </li>
    </ul>
  )
}

export default SignedOutLinks