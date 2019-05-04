import React from "react";
import ReactDOM from "react-dom";

const getButtonText = () => {
  return "Click on Me"
}

const App = () => {
    return (
      <div>
        <label className = "label" htmlFor = "name">
          Enter name:
        </label>
        <input id = "name" type = "text" />
        <button style = {{backgroundColor: 'blue', color: 'white'}}>
          {getButtonText()}
        </button>
      </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));
