import React from "react";
import ReactDOM from "react-dom";
import SignaturePad from "./src/index";

ReactDOM.render(
  <SignaturePad clearButton="true" canvasStyle={{ width: 500, height: 250, backgroundColor: 'white' }} />,
  document.getElementById('container')
)