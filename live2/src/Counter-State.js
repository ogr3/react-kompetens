import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increaseCounter = this.changeCounter.bind(this, 1);
    this.decreaseCounter = this.changeCounter.bind(this, -1);
  }

  changeCounter(value) {
    this.setState(state => ({
      counter: Math.max(state.counter + value, 0)
    }));
  }

  render() {
    return (
      <div className="counter">
        <div>
          <button onClick={this.increaseCounter}>+</button>
          <button onClick={this.decreaseCounter}>-</button>
          Counter value: {this.state.counter}
        </div>
      </div>
    );
  }
}