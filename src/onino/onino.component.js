import React from "react";
import ReactiveLayout from "reactive-layout";
import Page1 from "./components/page1";
import Welcome from "./components/welcome";
import ecran from "./images/ecran.jpg";
// import Page2 from "./components/page2";

const bgs = [
  {
    img: ecran,
  },
  {
    color: "#000000",
  },
];

const navBarStyles = {
  centeredContainer: {},
  navButton: {
    color: "white",
  },
};

const App = () => (
  <ReactiveLayout
    id="root"
    components={[Welcome, Page1]}
    navItems={["HOME", "Page2"]}
    navBarStyles={navBarStyles}
    bgs={bgs}
  />
);

export default App;
