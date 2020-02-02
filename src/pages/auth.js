import React from 'react'
import { Redirect } from 'react-router-dom'
import { Helmet } from "react-helmet"
import styled from 'styled-components'
import { breakPoints } from '../components/MediaType'
import { useSelector, useDispatch } from 'react-redux'

import { signIn, signUp, loginWithProvider, resetPasswordEmail, } from '../store/actions/auth'

// Components
import Auth from '../components/AuthForm'

const Loginform = styled.div`
  top: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* Phone device */
  @media ${breakPoints.phone} {
    top: 70px; 
    margin-bottom: 50px;
  }
`

const AuthPage = () => {

  const auth = useSelector(state => state.firebase.auth)
  const authError = useSelector(state => state.auth.authError)

  const dispatch = useDispatch()

  if (auth.uid) return <Redirect to='/' />

  return (
    <>
      <Helmet>
        <title>Auth</title>
      </Helmet>
      <Loginform>
        <Auth
          signIn={(email) => dispatch(signIn(email))}
          regUser={(newUser) => dispatch(signUp(newUser))}
          loginWithProvider={(creds) => dispatch(loginWithProvider(creds))}
          resetPasswordEmail={(res) => dispatch(resetPasswordEmail(res))}
          authError={authError}
        />
      </Loginform>
    </>
  )
}

export default AuthPage

