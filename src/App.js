import "./style.css";

import CardList from "./components/CardList"
import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import MusicPlayer from "./components/MusicPlayer";
import HowToPlay from "./components/HowToPlay";
import ContactInformation from "./components/ContactInformation";
import Attributions from "./components/Attributions";
function App() {
  const [screen , setScreen] = useState("welcome-page")
  const [isMusicPlaying , setIsMusicPlaying] = useState(false)
  
  

  
  return (
    <div className="app">
    <MusicPlayer isPlaying={isMusicPlaying} setIsPlaying={setIsMusicPlaying}></MusicPlayer>
    
      {screen == "welcome-page" && <WelcomePage setScreen={setScreen} setIsMusicPlaying={setIsMusicPlaying}></WelcomePage>}
      {screen == "game" &&  <CardList setScreen={setScreen}></CardList>}
      {screen == "how-to-play" && <HowToPlay setScreen={setScreen}></HowToPlay>}
      {screen == "contact-information" && <ContactInformation setScreen={setScreen}></ContactInformation> }
      {screen == "attributions" && <Attributions setScreen={setScreen}></Attributions> }
    </div>
  );
}

export default App;
