import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Tab, Tabs } from "@blueprintjs/core";

import { Container } from "./../components/styled-components";
import OfferApp from "./offers/offer-app.template";

const Box = Container.extend`
  max-width: ${props => props.theme["screen-width"]+'px'};
  width: ${props => props.theme["screen-width"]+'px'};
`;

const TabItem1 = <div style={{display: "flex",flex : 1}}> hey </div>

const MyTabs = styled(Tabs)`
  display : flex;
  flex : 1;
  width : 100%;
  align-items : center;
  justify-content: center;
`

class Offers extends Component {

  state = {
    slectedId: "1"
  }

  componentDidMount(){
  
  }

  handleTabChange = (newId, prevId, e) => {
    this.setState({
      selectedId: newId
    })
  }

  render() {
    return (
      <Box>
        <MyTabs
          id="TabsExample"
          onChange={this.handleTabChange}
          selectedTabId={this.state.selectedId}
          vertical>
          <Tab id="1" title="Application multiplateformes" panel={<OfferApp />} />
          <Tab id="2" title="Applications embarquées" panel={"ho"} />
          <Tab id="3" title="Prototypes fonctionnels" panel={"ha"} />
          <Tab id="4" title="Formations Web/IoT" panel={"ha"} />
          <Tab id="5" title="Conseils stratégie digitale" panel={"ha"} />
        </MyTabs>
      </Box>
    );
  }
}


Offers.propTypes = {
 
};

export default Offers;
