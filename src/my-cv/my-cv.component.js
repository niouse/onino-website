import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'

import nodejsImg from "./images/nodejs.png";
import bannerImg from "./images/banner.jpg";
import bg1 from "./images/bg/tech-bg1.jpg"
import bg2 from "./images/bg/tech-bg2.jpg"
import bg3 from "./images/bg/tech-bg3.jpg"
import bg4 from "./images/bg/tech-bg4.jpg"

import Banner from './templates/banner.template'


import Navigation from './components/navigation.template'


import withData from './services/with-data'
import withTheme from './services/with-theme'
import Screen from './components/screen.layout'
import Skills from './templates/skills.template';
import Offers from './templates/offers.template';
import About from './templates/about.template'


class App extends Component {
  constructor() {
    super()
    this.state = {
      isDetailOpen: false,
      detailIndex: 0,
      selectedId: "0"
    }
  }



  handleTabChange = (newId, prevId, e) => {
    this.setState({
      selectedId: newId
    })
    this.scroll(parseInt(newId))
  }

  scroll = (index) => {
    const target = document.getElementById('root').children[index + 1]
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': target.offsetTop
    })
  }

  scrollNext = () => {
    console.log(this.state.selectedId)
    const selectedId = parseInt(this.state.selectedId)
    const newId = selectedId + 1
    this.setState({
      selectedId: newId.toString()
    })
    console.log(newId)
    this.scroll(newId)
  }

  scrollPrev = () => {
    const selectedId = parseInt(this.state.selectedId)
    const newId = selectedId - 1
    this.setState({
      selectedId: newId.toString()
    })
    this.scroll(newId)
  }


  openDetails = (index) => {
    this.setState({
      isDetailOpen: true,
      detailIndex: index,
    })
  }

  closeDetails = () => {
    this.setState({
      isDetailOpen: false
    })
  }

  submitForm = (e) => {
    e.preventDefault()
  }

  render() {
    const { setLanguage, navItems, texts, theme, infos, experiences, skills, formations } = this.props
    return (
      <Fragment>
        <Navigation
          setLanguage={setLanguage}
          navItems={navItems}
          selectedId={this.state.selectedId}
          handleTabChange={this.handleTabChange}
          bgColor={theme.nav}
          textColor={theme.text3} />
        <Screen
          index={0}
          //bg={bg1}
          scrollNext={this.scrollNext}
          scrollPrev={this.scrollPrev}
          secondary>
          <Banner
            infos={infos}
            texts={texts.banner}
            image={nodejsImg}
          />
        </Screen>
        <Screen
          index={1}
          scrollNext={this.scrollNext}
          scrollPrev={this.scrollPrev}
          //bg={bg3}
          secondary>
          <Offers />
        </Screen>
        <Screen
          index={2}
          scrollNext={this.scrollNext}
          scrollPrev={this.scrollPrev}
          //bg={bg2}
          primary>
          <Skills />
        </Screen>
        <Screen
          index={3}
          scrollNext={this.scrollNext}
          scrollPrev={this.scrollPrev}
          //bg={bg2}
          primary>
          <About />
        </Screen>
        <Screen
          index={4}
          // bg={bg4}
          tertiary
          scrollNext={this.scrollNext}
          scrollPrev={this.scrollPrev}>

        </Screen>
      </Fragment>
    );
  }
}

App.propTypes = {
  infos: PropTypes.any,
  experiences: PropTypes.any,
  formations: PropTypes.any,
  skills: PropTypes.any,
  texts: PropTypes.object.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
  setLanguage: PropTypes.func,
  theme: PropTypes.object.isRequired
}


const WithTheme = withTheme()(App)
const WithData = withData()(WithTheme)

export default WithData


