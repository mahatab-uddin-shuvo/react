import React, { Component } from "react";

class CounterAlt extends Component {

  state = {
    count: this.props.count,
    counting: true,
  };


  handleIncrement = (number) => () => {
    this.setState((prevState) => ({
      count: prevState.count + number,
      counting: true,
    }));
  };


  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
      counting: true,
    }));
  };


  handleReset = () => {
    this.setState({
      count: 0,
      counting: false,
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.counting ? "counted" : "not counted"}</h3>
        <p>Count: {this.state.count}</p>
        <button
          style={{ marginRight: "5px" }}
          onClick={this.handleIncrement(5)}
        >
          Increase
        </button>
        <button style={{ marginRight: "5px" }} onClick={this.handleDecrement}>
          Decrement
        </button>
        <button style={{ marginRight: "5px" }} onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default CounterAlt;
