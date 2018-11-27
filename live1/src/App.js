import React, { Component } from "react";
import "./App.css";
import { HelloWorld } from "./HelloWorld";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HelloWorld name="C.A.G" />
        </header>
        <p>Outside</p>
      </div>
    );
  }
}

export default App;
