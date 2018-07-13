import React from "react";
import PropTypes from "prop-types";
import { Box } from "grid-styled";


import styled from "styled-components";
import {
  Container,
  CenterAll,
  P,
  BigText,
  Title1,
} from "./../components/styled-components";
import { isPc } from "../api/theme-utils";
import TextScroll from "../components/text-scroll/text-scroll.component";


const BgBox = Container.extend`
  width: 100%;
  max-width: 100%;
`;

const CenterBox = CenterAll.extend`
  margin: auto;
  max-width: 1080px;
  display : flex;
  flex-direction: column;
  align-items : center;
  flex: 1;
`;

const Image = styled.img.attrs({
  id: "diamond",
  src: props => props.image,
  alt: "#"
})`
  height: 120px;
`;

const Title = Title1.extend`
  text-align : center;
  padding : 10px 0px 10px 0px;
`

const P_ = P.extend`
  padding : 50px 0px 50px 0px;
`


const Banner = ({ infos, image }) => {
  return (
    <BgBox>
      <CenterBox>
        <Image image={image} />
        <BigText>Onino.js</BigText>
        <Title>Fullstack javascript Development</Title>
        <P_>FOR</P_>
        <TextScroll size={80} fontSize={70} vy={2}/>
      </CenterBox>
    </BgBox>
  );
};

Banner.propTypes = {
  infos: PropTypes.shape({
    title: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    presentation: PropTypes.string.isRequired
  }),
  image: PropTypes.string.isRequired,
};
export default Banner;
