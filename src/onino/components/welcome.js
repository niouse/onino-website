import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  color: #ffffff;
`;

export const BigText = styled.strong`
  font-size: 4em;
  font-weight: bold;
`;

const CenterBox = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  padding: 10px 0px 10px 0px;
`;

const P = styled.p`
  color: white;
  font-size: 0.8em;
`;

const Banner = () => {
  return (
    <Container>
      <CenterBox>
        <BigText>Onino.js</BigText>
        <Title>Fullstack javascript </Title>
        <Title>Development</Title>
        <P>( Site en construction )</P>
      </CenterBox>
    </Container>
  );
};

Banner.propTypes = {};

export default Banner;
