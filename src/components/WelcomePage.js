import React from "react";

const WelcomePage = (props) => {
  return (
    <div className="welcome-page">
      <h1>The Cards</h1>
      <p>memory game</p>
      <div className="menu-buttons">
        <button
          onClick={() => {
            props.setIsMusicPlaying(true);
            props.setScreen("game");
          }}
        >
          Start Game
        </button>
        <button
          onClick={() => {
            props.setScreen("how-to-play");
          }}
        >
          How To Play ?
        </button>
        <button
          onClick={() => {
            props.setScreen("contact-information");
          }}
        >
          Contact Information
        </button>
        <button
          onClick={() => {
            props.setScreen("attributions");
          }}
        >
          Attributions
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
