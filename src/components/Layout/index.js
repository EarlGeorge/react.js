import React from 'react'
import Helmet from 'react-helmet'
import { Scrollbars } from 'react-custom-scrollbars'
import PropTypes from 'prop-types'

// styled-components 
import { GlobalStyle } from './style'

// Components
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    // Styling Custom Scrollbar
    <Scrollbars
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: '#9aaebf',
            borderRadius: '4px',
            boxShadow: '0 0 2px 1px rgba(255, 255, 255, 0.70)',
            width: '11px',
            margin: '0 -2px',
            zIndex: '1000'
          }}
        />
      )}
    >
      {/* Load global style */}
      <GlobalStyle />

      {/* Layout */}
      <div className='layout'>
        <Helmet>
          <html lang="en" />
          <title>Images + voice interaction | George / გიორგი</title>
          <meta
            name="description"
            content="unspalsh images"
          />
          <meta name="author" content='George Davituri' />
          <meta name="summary" content="images + voice interaction"></meta>
          <meta property="url" content="/reactjsapp-7dab3.web.app" />
        </Helmet>

        <Header />

        <main className='container' id="changesize">
          {children}
        </main>
      </div>

      {/* sticky footer should be outside of the <main> tag and as well out of .layout class element */}
      <Footer />
    </Scrollbars>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout

