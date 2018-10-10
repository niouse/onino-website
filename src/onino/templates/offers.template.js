import React, { Component } from "react";
// import PropTypes from "prop-types";


import { Container } from "./../components/styled-components";

const Box = Container.extend`
  max-width: ${props => props.theme["screen-width"]+'px'};
  width: ${props => props.theme["screen-width"]+'px'};
`;

class Offers extends Component {

  state = {
    slectedId: "1"
  }

  componentDidMount(){
  
  }

  render() {
    return (
      <Box>
        <h1>hey</h1>
      </Box>
    );
  }
}


Offers.propTypes = {
 
};

export default Offers;
