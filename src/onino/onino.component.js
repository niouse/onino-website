import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types'

import bg from "./images/ecran.jpg"

import Banner from './templates/banner.template'
import Offers from './templates/offers.template';

import withData from './services/with-data'
import withTheme from './services/with-theme'
import Screen from './components/screen.layout'

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
    this.scroll(parseInt(newId, 10))
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
    const selectedId = parseInt(this.state.selectedId, 10)
    const newId = selectedId + 1
    this.setState({
      selectedId: newId.toString()
    })
    this.scroll(newId)
  }

  scrollPrev = () => {
    const selectedId = parseInt(this.state.selectedId, 10)
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
    return (
      <Fragment>
        <Screen
          index={0}
          bg={bg}
          scrollNext={this.scrollNext}
          scrollPrev={this.scrollPrev}
          secondary>
          <Banner />
        </Screen>
        <Screen
          index={1}
          scrollNext={this.scrollNext}
          scrollPrev={this.scrollPrev}
          bg={bg}
          secondary>
          <Offers />
        </Screen>
      </Fragment>
    );
  }
}

App.propTypes = {
  // defaultLanguage: PropTypes.string,
}


const WithTheme = withTheme()(App)
const WithData = withData()(WithTheme)

export default WithData


