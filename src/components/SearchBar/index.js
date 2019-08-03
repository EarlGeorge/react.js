import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './search.module.scss'
import icon from '../../images/search.svg'

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
      const { loopNum, text, typingSpeed } = this.state
      const { dataText } = this.state
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
      if (text === '' ) {
        const msg = new SpeechSynthesisUtterance()
        msg.text = 'What are you looking for?'
        speechSynthesis.speak(msg)
      }
      setTimeout(typing, typingSpeed)
    }
    typing()
  }

  span = () => {
    if (this.state.info === false) {
      this.setState(prevState => {
        return { info: !prevState.info }
      })
    } else {
      this.setState({ info: false })
    }
  }

  render() {
    const span = this.state.info ? `${style.span_active}` : `${style.span}`

    return (
      <div className={style.search}>
        <img
          src={icon}
          alt="search button"
          onClick={this.handleOpen}
        />
        <input
          type="text"
          className={style.active}
          placeholder={this.state.text}
          onChange={this.props.searching}
          onKeyDown={this.span}
          name="searchText"
          onFocus={this.handleOpen}
          onChange={this.props.fireChange}
          value={this.props.searching}
        />
        <span className={span}>Search result</span>
      </div>
    )
  }
}

index.propTypes = {
  searching: PropTypes.func,
}
