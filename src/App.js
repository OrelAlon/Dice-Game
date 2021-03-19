import './App.css';
import React from 'react';
import RollDice from './component/RollDice';
import Player from './component/Player';
///
///
const initialState = {
  currentPlayer: 'player1',
  scoreGoal: 20,
  player1: {
    currentScore: 0,
    totalScore: 0,
  },
  player2: {
    currentScore: 0,
    totalScore: 0,
  },

  /* etc */
};
//
//
class App extends React.Component {
  state = initialState;
  updateRollScore = (rollSum) => {
    const playerTurn = this.state.currentPlayer;
    const updateCurrentScore = this.state[playerTurn].currentScore;
    const updateTotalScore = this.state[playerTurn].totalScore;

    if (rollSum !== 12) {
      this.setState(() => ({
        [playerTurn]: {
          currentScore: updateCurrentScore + rollSum,
          totalScore: updateTotalScore,
        },
      }));
    } else {
      this.setState({
        [playerTurn]: {
          currentScore: 0,
          totalScore: updateTotalScore,
        },
      });
      this.passTurn();
    }
  };

  passTurn = () => {
    const playerTurn = this.state.currentPlayer;
    const updateTotalScore = this.state[playerTurn].totalScore;
    this.setState((prevState) => ({
      [playerTurn]: {
        currentScore: 0,
        totalScore: +updateTotalScore + prevState[playerTurn].currentScore,
      },
    }));

    this.setState((prevState) => ({
      currentPlayer:
        prevState.currentPlayer === 'player1' ? 'player2' : 'player1',
    }));
  };
  winnerPlayer = () => {
    alert(this.state.currentPlayer + ' Is The WINNER!');
    return this.newGame();
  };
  newGame = () => {
    this.setState(initialState);

    console.log('!');
  };

  render() {
    const playerTurn = this.state.currentPlayer;
    const scoreGoal = this.state.scoreGoal;
    const updateCurrentScore = this.state[playerTurn].currentScore;
    const updateTotalScore = this.state[playerTurn].totalScore;

    console.log(this.state);
    if (updateTotalScore + updateCurrentScore >= scoreGoal) {
      this.winnerPlayer();
    }
    return (
      <div className='mainPage'>
        <Player
          id='player1'
          currentScore={this.state.player1.currentScore}
          totalScore={this.state.player1.totalScore}
          currentPlayer={playerTurn}
        />
        <div>
          <button onClick={this.newGame} className='holdBtn'>
            New Game
          </button>
          <h1>Roll-Dice Game</h1>
          <RollDice takeRoll={this.updateRollScore} />
          <button onClick={this.passTurn} className='holdBtn'>
            HOLD
          </button>
        </div>
        <Player
          id='player2'
          currentScore={this.state.player2.currentScore}
          totalScore={this.state.player2.totalScore}
        />
      </div>
    );
  }
}

export default App;
