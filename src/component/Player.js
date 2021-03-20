import React from 'react';
import '../App.css';

class Player extends React.Component {
  myTurn = () => {
    console.log(this.props.currentPlayer);
  };

  render() {
    return (
      <div className={this.props.id}>
        <div
          className='divPlayer'
          id={
            this.props.currentPlayer === this.props.id
              ? this.props.id
              : 'hidden'
          }
        >
          <h1 className='namePlayer'>{this.props.id}</h1>
          <div className='totalScore'>
            <h2>Total Score</h2>
            <h1>{this.props.totalScore}</h1>
          </div>
          <div className='currentScore'>
            <h2>Current Score</h2>
            <h1>{this.props.currentScore}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
