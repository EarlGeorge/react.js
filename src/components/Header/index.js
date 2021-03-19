import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

// styling
import { Header } from './style'

// user navbar
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

// logo icon
import logo from '../../images/pictures.svg'

const Index = () => {
  const [active, setActive] = useState()

  const handleOpen = () => {
    setActive(!active)
    // not the best way to use ID in react but now it's ok.
    // on toggle hamburger button applies transition for "Layout Component's <main> element"
    document.getElementById('changesize').classList.toggle(`children`)
  }

  // small screen
  // active button-X OR initial hamburger
  const hamburger = active ? `hamburger hamburgerActive` : `hamburger`
  // overlay 'navbar + before transition' OR initial navbar style
  const navbar = active ? `overlayActive overlay` : `initialNav`

  // Redux Firebase User auth
  const auth = useSelector(state => state.firebase.auth)
  const profile = useSelector(state => state.firebase.profile)
  // NavBar User in-out Links
  const links = auth.uid ? <SignedInLinks profile={profile} auth={auth} /> : <SignedOutLinks />;

  return (
    <Header>
      <div className="container">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="logo" />
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
    </Header>
  )
}


export default Index
