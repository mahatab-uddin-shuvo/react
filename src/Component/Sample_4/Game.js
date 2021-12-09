import React, { Component } from "react";
class Game extends Component {
  state = {
    scoreBoard1: 0,
    scoreBoard2: 0,
    winningScore: 7,
  };

  Player1 = () => {
    if (this.state.scoreBoard1 < this.state.winningScore) {
      this.setState({
        scoreBoard1: this.state.scoreBoard1 + 1,
      });
    }
  };

  PLayer2 = () => {
    if (this.state.scoreBoard2 < this.state.winningScore) {
      this.setState({
        scoreBoard2: this.state.scoreBoard2 + 1,
      });
    }
  };

  winner = () => {
    if (this.state.scoreBoard1 === this.state.winningScore) {
      return <span>Wining Player1</span>;
    } else if (this.state.scoreBoard2 === this.state.winningScore) {
      return <span>Wining Player2</span>;
    } else {
      return (
        <p>
          {this.state.scoreBoard1} to {this.state.scoreBoard2}
        </p>
      );
    }
  };

  render() {
    return (
      <div>
        {this.winner()}
        <> 
          <br />
          <button style={{ marginRight: "5px" }} onClick={this.Player1}>
            Player 1
          </button>
          <button style={{ marginRight: "5px" }} onClick={this.PLayer2}>
            PLayer 2
          </button>
        </>
      </div>
    );
  }
}

export default Game;
