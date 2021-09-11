import "./style.css";

import CardList from "./components/CardList";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import MusicPlayer from "./components/MusicPlayer";
import HowToPlay from "./components/HowToPlay";
import ContactInformation from "./components/ContactInformation";
import Attributions from "./components/Attributions";
import EndGame from "./components/EndGame";
function App() {
  const [screen, setScreen] = useState("welcome-page");
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [moves, setMoves] = useState(0);

  return (
    <div className="app">
      <MusicPlayer
        isPlaying={isMusicPlaying}
        setIsPlaying={setIsMusicPlaying}
      ></MusicPlayer>

      {screen == "welcome-page" && (
        <WelcomePage
          setScreen={setScreen}
          setIsMusicPlaying={setIsMusicPlaying}
        ></WelcomePage>
      )}
      {screen == "game" && (
        <CardList
          setScreen={setScreen}
          setMoves={setMoves}
          moves={moves}
        ></CardList>
      )}
      {screen == "how-to-play" && <HowToPlay setScreen={setScreen}></HowToPlay>}
      {screen == "contact-information" && (
        <ContactInformation setScreen={setScreen}></ContactInformation>
      )}
      {screen == "attributions" && (
        <Attributions setScreen={setScreen}></Attributions>
      )}
      {screen == "end-game" && (
        <EndGame
          moves={moves}
          setMoves={setMoves}
          setScreen={setScreen}
        ></EndGame>
      )}
    </div>
  );
}

export default App;
