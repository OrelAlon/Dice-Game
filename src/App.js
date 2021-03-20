import './App.css';
import React from 'react';
import RollDice from './component/RollDice';
import Player from './component/Player';
import swal from 'sweetalert';

///
// /
//
//
const initialState = {
  currentPlayer: 'player1',
  scoreGoal: 50,
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
  updateRollScore = (rollSum, rolls) => {
    const playerTurn = this.state.currentPlayer;
    const updateCurrentScore = this.state[playerTurn].currentScore;
    const updateTotalScore = this.state[playerTurn].totalScore;

    if (rolls[0] !== rolls[1]) {
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
      swal('You Got Double! ' + this.state.currentPlayer + ' Turn Now', {
        buttons: false,
        timer: 2000,
      });
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
    swal(this.state.currentPlayer + ' Is The WINNER!', {
      buttons: false,
    });

    return this.newGame();
  };
  newGame = () => {
    this.setState(initialState);
  };

  render() {
    console.log(this.input1);
    const playerTurn = this.state.currentPlayer;
    const scoreGoal = this.state.scoreGoal;
    const updateCurrentScore = this.state[playerTurn].currentScore;
    const updateTotalScore = this.state[playerTurn].totalScore;

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
          <div className='mediaHead'></div>
          <h1 className='header'>Roll-Dice Game</h1>
          <div className='area'>⚠ Watch Out Of Doubles ⚠</div>
          <h3 className='scoreGoal'>
            Your Goal Is <span>{this.state.scoreGoal}</span>
          </h3>

          <div className='mediaBtns'>
            <RollDice takeRoll={this.updateRollScore} />
            <div className='btns'>
              <button
                className='glow-on-hover'
                id='saveBtn'
                type='button'
                onClick={this.passTurn}
              >
                Save Your Score!
              </button>
              <button onClick={this.newGame} className='button'>
                <span> New Game </span>
              </button>
            </div>
          </div>
        </div>
        <Player
          id='player2'
          currentScore={this.state.player2.currentScore}
          totalScore={this.state.player2.totalScore}
          currentPlayer={playerTurn}
        />
      </div>
    );
  }
}

export default App;
