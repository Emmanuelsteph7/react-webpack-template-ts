import React from "react";
import { image, googleSvg } from "./assets";
import "./styles.css";

const App = () => {
  return (
    <div>
      <h1>React Typescript Template</h1>
      <img src={image} alt="" />
      <img src={googleSvg} alt="" width={50} height={50} />
    </div>
  );
};

export default App;
