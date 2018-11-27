import React from "react";
import { connect } from "react-redux";
import { increaseCounterAction, decreaseCounterAction } from "./state";

class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <div>
          <button onClick={this.props.increaseCounter}>+</button>
          <button onClick={this.props.decreaseCounter}>-</button>
          Counter value: {this.props.counterValue}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counterValue: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch(increaseCounterAction),
    decreaseCounter: () => dispatch(decreaseCounterAction)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)