import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { signOut } from '../../store/actions/auth'

import style from './header.module.scss'

const SignedInLinks = (props) => {
  const {auth, profile} = props
  
  const provider = auth.displayName;
  const user = `${profile.firstName} ${profile.lastName}`; 
  // check if user is logged in with third-party authentication or it was reg user
  const userInfo = (profile.firstName === undefined) ? (provider) : (user)  

  const dispatch = useDispatch()

  return (
      <ul>
        <li>
          <NavLink activeClassName={style.activeButton} to="/search">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={style.activeButton} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/' activeClassName={style.user}>
            {userInfo}
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => dispatch(signOut())} exact to='/' activeClassName={style.activeButton}>
            Log Out
          </NavLink>
        </li>
      </ul>
  )
}


export default SignedInLinks
