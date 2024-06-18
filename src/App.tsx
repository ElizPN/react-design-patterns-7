import React from "react";
import "./App.css";
import Uncontrolled from "./components/Uncontrolled";
import Controlled from "./components/Controlled";
import Focus from "./components/Focus";
import Transition from "./components/Motion/Transition";
import Circle from "./components/SVG/Circle";
import RedCircle from "./components/SVG/RedCircle";

function App() {
  return (
    <div>
      <Uncontrolled />
      <Controlled />
      <Focus />
      <Transition />
      <Circle x={20} y={20} radius={30} fill="blue" />
      <RedCircle x={40} y={40} radius={40} />
    </div>
  );
}

export default App;
