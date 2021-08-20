import "./styles.css";
import { useState } from "react";

export default function App() {
  var [textinput, updateTextInput] = useState("Enter the text to be changed!");
  var [typeOfHeading, updateTypeOfHeading] = useState("");

  function updateUserTextInput(event) {
    updateTextInput(event.target.value);
  }

  function h1EventHandler() {
    updateTypeOfHeading("h1");
  }

  function h2EventHandler() {
    updateTypeOfHeading("h2");
  }

  function h3EventHandler() {
    updateTypeOfHeading("h3");
  }

  function displayOutputText() {
    if (typeOfHeading === "h1") {
      return <h1>{textinput}</h1>;
    } else if (typeOfHeading === "h2") {
      return <h2>{textinput}</h2>;
    } else if (typeOfHeading === "h3") {
      return <h3>{textinput}</h3>;
    }
  }

  return (
    <div className="App">
      <h1>Update Text Input</h1>
      <input onChange={(event) => updateUserTextInput(event)}></input>
      <div>{displayOutputText()}</div>
      <button onClick={h1EventHandler}>h1</button>
      <button onClick={h2EventHandler}>h2</button>
      <button onClick={h3EventHandler}>h3</button>
    </div>
  );
}
