import React, { Component } from "react";
import Count from "./CountTask";
import PickLucky from "./PickLucky";
class CounterTask extends Component {
  state = {
    counts: [40, 45, 90],
    luckyNum: null,
  };

  generateNumber = () => {
    this.setState({
      counts: this.state.counts.map(() => Math.floor(Math.random() * 100 + 1)),
    });
  };

  pickLuckyNum = () => {
    this.setState({
      luckyNum: this.state.counts[
        Math.floor(Math.random() * this.state.counts.length)
      ],
    });
  };

  resetNumber = () => {
    let count = [0, 0, 0];
    this.setState({
      counts: count,
      luckyNum: null,
    });
  };

  addNumber = () => {
    let counts = [...this.state.counts, 0];
    console.log(counts);
    this.setState({ counts });
  };

  render() {
    return (
      <div>
        {this.state.counts.map((count, index) => (
          <Count key={index} myCount={count} />
        ))}
        <br />
        <button style={{ marginRight: "5px" }} onClick={this.generateNumber}>
          Random Number
        </button>
        <button style={{ marginRight: "5px" }} onClick={this.addNumber}>
          Add Number
        </button>
        <button style={{ marginRight: "5px" }} onClick={this.resetNumber}>
          Reset Number
        </button>

        <PickLucky
          pickLuckyNum={this.pickLuckyNum}
          luckyNum={this.state.luckyNum}
        />
      </div>
    );
  }
}

export default CounterTask;
