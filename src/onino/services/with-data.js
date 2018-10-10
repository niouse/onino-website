import React, { Component } from 'react'
import PropTypes from 'prop-types'

import textsFr from './../data/texts-fr.json'
import textsEn from './../data/texts-en.json'


const texts = {
  fr: textsFr,
  en: textsEn
}

const withData = () => (Wrapped) => {
  class Result extends Component {

    constructor({ defaultLanguage }) {
      super()
      this.state = {
        texts: texts[defaultLanguage],
        lng: defaultLanguage,
        infos: false,
        experiences: false,
        skills: false,
        formations: false,
      }
    }

    componentDidMount() {
    }

    setLanguage = (lng) => {
      this.setState({
        texts: texts[lng]
      })
    }

    render() {
      return <Wrapped
        {...this.props}
        setLanguage={this.setLanguage}
        texts={this.state.texts} />
    }
  }

  Result.propType = {
    defaultLanguage: PropTypes.string,
  }

  Result.defaultProps = {
    defaultLanguage: "fr"
  }

  return Result
}



export default withData