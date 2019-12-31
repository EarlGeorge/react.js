import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { SearchBar } from './style'
import icon from '../../images/search.svg'

//  SearchBar input + typewriter effect for input placeholder
export default class index extends Component {
  state = {
    info: false,
    text: '',
    loopNum: 0,
    typingSpeed: 110,
    dataText: ['What are you looking for?'],
  }

  handleOpen = () => {

    const typing = () => {
      const { loopNum, text, typingSpeed, dataText } = this.state
      // Current index of word  // LoopNum = 0
      const i = loopNum % dataText.length
      // Get full text of current word
      const fullText = dataText[i]

      if (text.length === 25) {
        return
      }

      this.setState({
        text: fullText.substring(0, text.length + 1),
      })

      // make sound for typed text
      if (text === '') {
        const msg = new SpeechSynthesisUtterance()
        msg.text = 'What are you looking for?'
        speechSynthesis.speak(msg)
      }
      setTimeout(typing, typingSpeed)
    }
    typing()
  }

  span = () => {
    this.setState(prevState => {
      return { info: !prevState.info }
    })
  }

  render() {
    const { searching, fireChange } = this.props
    const span = this.state.info ? `span_active` : `span`

    return (
      <SearchBar>
        <img
          src={icon}
          alt="search button"
          onClick={this.handleOpen}
        />
        <input
          type="text"
          className="active"
          placeholder={this.state.text}
          onChange={searching}
          onKeyDown={this.span}
          name="searchText"
          onFocus={this.handleOpen}
          onChange={fireChange}
          value={searching}
        />
        <span className={span}>Search result</span>
      </SearchBar>
    )
  }
}

index.propTypes = {
  searching: PropTypes.string,
}
