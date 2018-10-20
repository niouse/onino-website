import React, { Component } from "react";
import { AppResponsive } from "svg-animations";
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

class Page2 extends Component {
  render() {
    return (
      <Container>
        <h1> Site en construction </h1>
        <AppResponsive size={400} />
      </Container>
    );
  }
}

Page2.propTypes = {};

export default Page2;
