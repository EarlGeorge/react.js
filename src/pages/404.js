import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  position: relative;
  display: flex;
  flex-flow: column-reverse;
  justify-content: center;
  align-items: center;
  top: 100px;
  margin: 0 70px;
  padding: 0px 20px;
  color: red;
  background: yellow;
  h1 {
    color: black;
  }
`

const NotFoundPage = ({location}) => (
  <Page>
    <h2>NOT FOUND</h2>
    <p>You just hit a page that doesn't exist... the sadness.</p>
    <h1>{location.pathname}</h1>
  </Page>
)

export default NotFoundPage
