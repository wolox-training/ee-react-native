import React, { Component } from 'react';

import styles from './styles.module.scss';
import Board from './components/Board';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true
  };

  handleClick = (i) => () => {
    this.setState(prevState => {
      const history = prevState.history.slice(0, prevState  .stepNumber + 1);
      const current = history[history.length - 1];
      const squaresNew = [...current.squares];
      if (calculateWinner(squaresNew) || squaresNew[i]) {
        return;
      }
      squaresNew[i] = prevState.xIsNext ? 'X' : 'O';
      return {
        history: history.concat([{
          squares: squaresNew,
        }]),
        stepNumber: history.length,
        xIsNext: !prevState.xIsNext };
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render () {
    const history = [...this.state.history];
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const ended = isBoardFullfilled(current.squares);

    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move}`
        : 'Go to game start';
      return (
        <li key={move}>
          <button type="button" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status = '';
    if (winner) {
      status = `Winner: ${winner}`;
    } else if (ended) {
      status = 'Game ended. It is a tie';
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isBoardFullfilled(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      return false;
    }
  }
  return true;
}

export default Game;
