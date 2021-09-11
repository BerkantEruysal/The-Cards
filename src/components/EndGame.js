import React from "react";

const EndGame = (props) => {
  return (
    <div className="end-game">
      <h1>Congratulations ! You Win</h1>
      <h1>Your Moves : {props.moves}</h1>
      <button
        onClick={() => {
          props.setMoves(0);
          props.setScreen("game");
        }}
      >
        Play Again
      </button>
      <button
        onClick={() => {
          props.setMoves(0);
          props.setScreen("welcome-page");
        }}
      >
        Go to Main Menu
      </button>
    </div>
  );
};

export default EndGame;
