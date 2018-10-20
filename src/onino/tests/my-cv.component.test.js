import React from "react";
import { shallow } from "enzyme";
import App from "./../onino.component";

it("renders without crashing", () => {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "root");
  document.body.appendChild(newDiv);
  shallow(<App id="root" />);
});
