import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import bracket from './bracket.png'

const texts = [
  "lean businesses",
  "smart indusrties",
  "fun education",
  "easy research",
  "safe processes",
  "happy managers",
  "clean events"
]

const Container = styled.div`
  display : flex;
  width : 100%;
  align-items : center;
`

const FixedContainer = styled.div`
  height : ${props => props.size + 'px'};
  position : relative;
  overflow : hidden;
  /* display : flex;  */
`

const Wrapper = styled.div.attrs({
  id: "scrolling-text",
})`
  position : relative;
  top : 0px;
  display: flex;
  flex-direction : column;
  align-items : center;
`

const Box = styled.div`
  height : ${props => props.size + 'px'};
  text-align : center;
  display : flex;
  align-items : center;
  font-size : ${props => props.fontSize + 'px'};
`

const Img = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt
})`
  height : 100px;
  width : auto;
`

const Img2 = Img.extend`
  transform : rotate(180deg);
`

class TextScroll extends Component {
  constructor(props) {
    super(props)
    this.animation = null
    this.repeat = null
    this.movingEl = null
    this.inc = 0
    this.steps = 0
    this.direction = 1
  }
  componentDidMount() {
    this.movingEl = document.getElementById('scrolling-text')
    this.start()
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animation)
    window.clearTimeout(this.repeat)
  }

  start = () => {
    this.animate()
  }

  moveText = () => {
    if (this.steps === texts.length - 1) {
      this.direction = -this.direction
      this.steps = 0
    }
    if (this.inc === this.props.size) {
      this.inc = 0
      this.steps += 1
      window.cancelAnimationFrame(this.animation)
      return
    }
    const newTop = (this.movingEl.offsetTop - this.props.vy * this.direction) + 'px'
    this.inc += this.props.vy
    this.movingEl.style.top = newTop
    this.animation = window.requestAnimationFrame(this.moveText)
  }

  animate = () => {
    this.animation = window.requestAnimationFrame(this.moveText)
    this.repeat = window.setTimeout(() => {

      this.animate()
    }, 3000)
  }

  render() {
    return (
      <Container>
        <Img2 src={bracket} />
        <FixedContainer size={this.props.size}>
          <Wrapper>
            {texts.map((item, index) => {
              return (
                <Box
                  key={'text-item' + index}
                  size={this.props.size}
                  fontSize={this.props.fontSize}>
                  {item}
                </Box>
              )
            })}
          </Wrapper>
        </FixedContainer>
        <Img src={bracket} />
      </Container>
    )
  }
}

TextScroll.propTypes = {
  size: PropTypes.number,
  fontSize: PropTypes.number
}

TextScroll.defaultProps = {
  size: 30,
  fontSize: 20,
  vy: 1
}

export default TextScroll