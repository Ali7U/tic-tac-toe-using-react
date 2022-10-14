import React, { useState } from "react";
import Square from "./Square";
import calculateWinner from "./calculateWinner";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = isX ? "X" : "O";
    setSquares(squares);
    setIsX(!isX);
  };

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `The winner is ${winner}`;
    // eslint-disable-next-line no-mixed-operators
  }  else {
    status = "The next player: " + (isX ? "X" : "O");
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setIsX(true);
  };

  const reClick = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div className="board">
      <div className="board-row">
        {reClick(0)}
        {reClick(1)}
        {reClick(2)}
      </div>
      <div className="board-row">
        {reClick(3)}
        {reClick(4)}
        {reClick(5)}
      </div>
      <div className="board-row">
        {reClick(6)}
        {reClick(7)}
        {reClick(8)}
      </div>
      <h2>{status}</h2>
      <button className="restart" onClick={handleRestart}>
        Restart Game!
      </button>
    </div>
  );
}

export default Board;
