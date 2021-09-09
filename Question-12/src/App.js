import "./styles.css";
import { useState } from "react";

export default function App() {
  var [textInput, updateTextInput] = useState("Enter a password");
  var [bgcolor, updateBgColor] = useState("white");
  var [errormsg, updateErrorMsg] = useState("");

  function checkHandler() {
    if (textInput.length < 10) {
      updateBgColor("red");
      updateErrorMsg("Invalid Password!!");
    } else if (textInput.length >= 10) {
      updateBgColor("green");
      updateErrorMsg("Valid Password");
    }
  }

  function changeTextInputHandler(event) {
    updateTextInput(event.target.value);
  }

  return (
    <div className="App">
      <input
        style={{ backgroundColor: bgcolor }}
        onChange={(event) => changeTextInputHandler(event)}
      ></input>
      <button onClick={checkHandler}>Submit</button>
      <div>{errormsg}</div>
    </div>
  );
}
