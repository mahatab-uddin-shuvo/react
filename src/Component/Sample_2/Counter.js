import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      counting: true,
    };
    // this.mkTimer();
    // this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // mkTimer() {
  //   setInterval(() => {
  //     this.setState({
  //       count: this.state.count+1,
  //     });
  //   }, 1000);
  // }

  handleIncrement(number) {
    console.log(this);

    //value pass by onclick event
    this.setState((prevState) => ({
      count: prevState.count + number,
      counting: true,
    }));

    // this.setState({
    //   count:this.state.count+1,
    //   counting:true
    // })

    //changing state or updateing state based on existing state
    // this.setState((prevState) => ({
    //   count: prevState.count + 1,
    //   counting: true,
    // }));

    //if any setstate update or change depend on other setstate
    // this.setState(prevState=>({
    //   count:prevState.count+2,
    //   counting:true
    // }));
    // this.setState(prevState=>({
    //   count:prevState.count+3,
    //   counting:true
    // }));
  }

  handleDecrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
      counting: true,
    }));
  }

  handleReset() {
    this.setState({
      count: 0,
      counting: false,
    });
  }

  render() {
    // console.log(this.state)

    // let counted;
    // if(this.state.counting){
    //   counted='Counted'
    // }
    // else{
    //   counted='not counted'
    // }
    return (
      <div>
        <h3>{this.state.counting ? "counted" : "not counted"}</h3>
        <p>Count: {this.state.count}</p>
        <button
          style={{ marginRight: "5px" }}
          onClick={this.handleIncrement.bind(this, 5)}
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
    ) ;
  }
}

export default Counter;
