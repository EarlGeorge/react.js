import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Layout from './components/Layout'

import Main from './pages/main'
import Auth from './pages/auth'
import About from './pages/about'
import Search from './pages/search'
import NotFound from './pages/404'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/auth' component={Auth} />
          <Route path='/about' component={About} />
          <Route path='/search' component={Search} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

console.info("%c hey, how is it going?", "color: red; font-family: sans-serif; font-size: 2em; text-shadow: #000 3px 3px;")

export default App