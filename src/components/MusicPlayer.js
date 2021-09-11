import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';
import Music from "../sounds/music.mp3"



const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const play = () => setPlaying(true);
  const stop = () => setPlaying(false)

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, play , stop];
};

const Player = ({ isPlaying , setIsPlaying}) => {
    const [playing, play , stop] = useAudio(Music);
    const [isMuted , setIsMuted] = useState(false);
    useEffect(() => {if(isPlaying == true && isMuted == false){play()} else stop()})
 
  
    return (
      <div className="music-player">
        <button onClick={() => isMuted ? setIsMuted(false) : setIsMuted(true)}>{isMuted ? "Unmute Music" : "Mute Music"}</button>
      </div>
    );
  };
  
  export default Player;