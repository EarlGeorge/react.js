import React from 'react'
import { Redirect } from 'react-router-dom'
import { Helmet } from "react-helmet"
import styled, { css } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { signIn, signUp, loginWithProvider, resetPasswordEmail, } from '../store/actions/auth'

// Components
import Auth from '../components/AuthForm'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const Loginform = styled.div`
  top: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* Phone device */
  ${media.phone`top: 70px; margin-bottom: 50px;`}
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

