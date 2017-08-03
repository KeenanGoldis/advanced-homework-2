import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "audio";
function changeCategory(category) {
  currentCategory = category;
  render();
}

function render() {
  ReactDOM.render(
    <App
      state={state}
      change={(catagory) => {return changeCategory(catagory);}}
      currentCategory={currentCategory}
    />,
    document.getElementById("root"),

  );
}
render();
