import "./styles.css";
import { useState } from "react";

export default function App() {
  var [textInput, updateTextInput] = useState("Enter text to be changed!");
  var [textColor, updateTextColor] = useState("black");

  function changeTextInput(event) {
    updateTextInput(event.target.value);
  }

  function redButtonHandler() {
    updateTextColor("red");
  }

  function blueButtonHandler() {
    updateTextColor("blue");
  }

  function greenButtonHandler() {
    updateTextColor("green");
  }

  function changeTextInputColor() {
    return textColor;
  }

  return (
    <div className="App">
      <h1>Text Input</h1>
      <input onChange={(event) => changeTextInput(event)}></input>
      <div style={{ marginTop: "2rem", color: changeTextInputColor() }}>
        {textInput}
      </div>
      <button onClick={redButtonHandler}>Red</button>
      <button onClick={greenButtonHandler}>Green</button>
      <button onClick={blueButtonHandler}>Blue</button>
    </div>
  );
}
