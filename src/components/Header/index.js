import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

import style from './header.module.scss'
import logo from '../../images/react-icon.svg'

const Index = () => {
  const [active, setActive] = useState()

  const handleOpen = () => {
    setActive(!active)
    // not the best way to use ID in react but now it's ok.
    document.getElementById('changesize').classList.toggle(`${style.children}`)
  }
 
 
  // active button-X OR initial hamburger
  const hamburger = active
  ? `${style.hamburger} ${style.hamburgerActive}`
  : `${style.hamburger}`
  // overlay 'navbar + before transition' OR initial navbar style
  const navbar = active
    ? `${style.overlayActive} ${style.overlay}`
    : `${style.initialNav}`

  const auth = useSelector(state => state.firebase.auth)
  const profile = useSelector(state => state.firebase.profile)

  const links = auth.uid ? <SignedInLinks profile={profile} auth={auth} /> : <SignedOutLinks />;
 
  return (
    <header className={style.header} id='navv'>
        <div className={style.container}>
          <NavLink to="/">
            <img src={logo} alt="Logo" className={style.logo} />
          </NavLink>

          <div className={hamburger} onClick={handleOpen}>
            <div />
            <div />
            <div />
          </div>

          <nav className={navbar}>
            {links}
          </nav>
          
        </div>
      </header>
  )
}


export default Index
