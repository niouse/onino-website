import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex : 1;
    display : flex;
    justify-content : center;
    align-items : center;
    padding : 0px 100px 0px 20px;
`

const P = styled.p`
  font-size : 1.1em;
  text-align : center;
  padding : 50px;
  width : 400px;
  line-height : 30px;

`

const Box = styled.div`
  flex :1;
  height : 100%;
  display :flex;
  align-items : center;
  /* border : 1px solid red; */
`

const Img = styled.img.attrs({
  src : props => props.src,
})`
  width : 70%;
  height : auto;
  max-height : 100%;
  margin : auto;
`

class OfferApp extends Component {

  render() {
    return (
      <Container>
        {/* <Box>
          <Img src="/images/test1.png" />
        </Box> */}
        <div>
        <P>Création from scratch d'applicatons et de sites internet full responsif. 
          Onino.js est grand spécialiste des moutons à cinq pattes. 
          Nous créons des applications multiplateformes avec des technologies 
          hybrides ou des progressives web app selon le cahier des charges du client
          </P>
          </div>
      </Container>
    )
  }
}

export default OfferApp


