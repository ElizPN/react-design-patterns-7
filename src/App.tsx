import React from "react";
import "./App.css";
import Uncontrolled from "./components/Uncontrolled";
import Controlled from "./components/Controlled";
import Focus from "./components/Focus";

function App() {
  return (
    <div>
      <Uncontrolled />
      <Controlled />
      <Focus />
    </div>
  );
}

export default App;
