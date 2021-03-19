import React from 'react';

import './RollDice.css';

const DiceImage = ({ roll }) => {
  if (roll === 1) {
    return (
      <img
        className='dice-image'
        src='https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg'
        alt='1'
      />
    );
  } else if (roll === 2) {
    return (
      <img
        className='dice-image'
        src='https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg'
        alt='2'
      />
    );
  } else if (roll === 3) {
    return (
      <img
        className='dice-image'
        src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg'
        alt='3'
      />
    );
  } else if (roll === 4) {
    return (
      <img
        className='dice-image'
        src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg'
        alt='4'
      />
    );
  } else if (roll === 5) {
    return (
      <img
        className='dice-image'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg'
        alt='5'
      />
    );
  } else if (roll === 6) {
    return (
      <img
        className='dice-image'
        src='https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg'
        alt='6'
      />
    );
  }
};
class RollDice extends React.Component {
  state = {
    rolls: [],
    rollSum: null,
  };

  diceRoll = (numberOfDice) => {
    let rolls = [];
    let rollSum = 0;
    for (let i = 0; i < numberOfDice; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      rollSum += rolls[i];
    }

    this.setState(
      {
        rolls,
        rollSum,
      },
      () => {}
    );
    this.props.takeRoll(rollSum);
  };
  // Start timer of one sec when rolling start
  //   setTimeout(() => {
  //     // Set rolling to false again when time over
  //     this.setState({ rolling: false });
  //   }, 1000);
  // }

  render() {
    return (
      <div className='rollDicePage'>
        <div className='theDice'>
          {this.state.rolls.map((roll, index) => (
            <DiceImage roll={roll} key={index} />
          ))}
        </div>
        <div className='rollMeBtn'>
          <button onClick={() => this.diceRoll(2)} className='rollBtn'>
            Roll Me
          </button>
        </div>
      </div>
    );
  }
}
export default RollDice;
