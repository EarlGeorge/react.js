import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// redux actions
import { signOut } from '../../store/actions/auth'

const SignedInLinks = (props) => {
  const { auth, profile } = props

  // info from firabase
  const provider = auth.displayName;
  const user = `${profile.firstName} ${profile.lastName}`;
  // check if user is logged in with third-party authentication or it was reg user
  const userInfo = (profile.firstName === undefined) ? (provider) : (user)

  const dispatch = useDispatch()

  return (
    <ul>
      <li>
        <NavLink activeClassName="activeButton" to="/search">
          Search
          </NavLink>
      </li>
      <li>
        <NavLink activeClassName="activeButton" to="/about">
          About
          </NavLink>
      </li>
      <li>
        <NavLink exact to='/' activeClassName="user">
          {userInfo}
        </NavLink>
      </li>
      <li>
        <NavLink onClick={() => dispatch(signOut())} exact to='/' activeClassName="activeButton">
          Log Out
          </NavLink>
      </li>
    </ul>
  )
}


export default SignedInLinks
