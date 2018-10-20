import React, { Component } from "react";
import { BottleMachine } from "svg-animations";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

class Offers extends Component {
  render() {
    return (
      <Container>
        <h1> Site en construction </h1>
        <BottleMachine size={400} />
      </Container>
    );
  }
}

Offers.propTypes = {};

export default Offers;
