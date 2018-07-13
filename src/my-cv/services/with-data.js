import React, { Component } from 'react'
import PropTypes from 'prop-types'

import cvEn from './../data/cv-en.json'
import cvFr from './../data/cv-fr.json'

import navItemsEn from "./../data/nav-items-en.json"
import navItemsFr from "./../data/nav-links-fr.json"

import textsFr from './../data/texts-fr.json'
import textsEn from './../data/texts-en.json'

const navItems = {
  en: navItemsEn,
  fr: navItemsFr
}
const cv = {
  fr: cvFr,
  en: cvEn,
}

const texts = {
  fr: textsFr,
  en: textsEn
}

const withData = () => (Wrapped) => {
  class Result extends Component {

    constructor({ defaultLanguage }) {
      super()
      this.state = {
        cv: cv[defaultLanguage],
        navItems: navItems['fr'],
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
        cv: cv[lng],
        navItems: navItems[lng],
        texts: texts[lng]
      })
    }

    render() {
      return <Wrapped
        {...this.props}
        cv={this.state.cv}
        experiences={this.state.experiences}
        infos={this.state.infos}
        formations={this.state.formations}
        skills={this.state.skills}
        navItems={this.state.navItems}
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