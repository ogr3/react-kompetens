import React, { Component } from "react";
import "./App.css";
import { HelloWorld } from "./HelloWorld";
import Counter from "./Counter-Redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HelloWorld name="C.A.G" />
        </header>
        <p>Outside</p>
        <Counter />
      </div>
    );
  }
}

export default App;
