import React from 'react';
import './Player.css';

class Player extends React.Component {
  myTurn = () => {
    console.log(this.props.currentPlayer);
  };

  render() {
    return (
      <div className={this.props.id} id={this.props.currentPlayer}>
        <h2>{this.props.id}</h2>
        <h1>{this.props.currentScore}</h1>
        <h1>{this.props.totalScore}</h1>
      </div>
    );
  }
}

export default Player;
