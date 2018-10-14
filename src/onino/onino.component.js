import React from "react";
import ReactiveLayout from "reactive-layout";
import { withData } from "reactive-layout";

import bg from "./images/ecran.jpg";

// import Banner from "./templates/banner.template";
import Offers from "./templates/offers.template";
import textsFr from "./data/texts-fr.json";
import textsEn from "./data/texts-en.json";

// const data = {
//   texts: {
//     fr: textsFr,
//     en: textsEn,
//   },
//   components: [Banner, Offers],
//   bgs: [bg, bg],
// };
const Comp1 = () => <div> Composant 1 </div>;
const Comp2 = () => <div> Composant 2 </div>;
const Comp3 = () => <div> Composant 3 </div>;
const Comp4 = () => <div> Composant 4 </div>;
const Comp5 = () => <div> Composant 5 </div>;

const data = {
  texts: {
    fr: textsFr,
    en: textsEn,
  },
  lng: "en",
  components: [Comp1, Offers, Comp3, Comp4, Comp5],
  bgs: [bg, bg, bg, bg, bg],
};

const WithData = withData(data)(ReactiveLayout);

export default WithData;
