import React, { Component } from "react";
import "./App.css";
import { StatefulComponent } from "./section-components/StatefulComponent";
import { Clock } from "./section-components/Clock";
import { ComponentWithData } from "./section-components/HigherOrderComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Code from Slides</header>
        <section>
          <h1>Komponenter</h1>
          <StatefulComponent />
          <Clock />
          <ComponentWithData />
        </section>
      </div>
    );
  }
}

export default App;
