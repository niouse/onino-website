import React from "react";
// import PropTypes from "prop-types";

import {
  BigText,
  Title1,
} from "./../components/styled-components";
import styled from "styled-components";

const BgBox = styled.div`
  width: 100%;
  height: 100%;
  display : flex;
  justify-content : flex-end;
`;

const CenterBox = styled.div`
  width : 360px;
  display : flex;
  flex-direction: column;
  align-items : flex-start;
  justify-content : center;
`;

const Title = Title1.extend`
  text-align : center;
  padding : 10px 0px 10px 0px;
`

const P = styled.p`
  color: white;
  font-size: 0.8em;
`

const Banner = () => {
  return (
    <BgBox>
      <CenterBox>
        <BigText>Onino.js</BigText>
        <Title>Fullstack javascript </Title>
        <Title>Development</Title>
        <P>( Site en construction )</P>
      </CenterBox>
    </BgBox>
  );
};

Banner.propTypes = {
};

export default Banner;
