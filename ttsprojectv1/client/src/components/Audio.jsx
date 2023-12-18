import { useState,useRef } from "react";
import React from 'react'



function Audio() {
  
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
  
    const togglePlayPause = () => {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
  
    const updateProgressBar = () => {
      const newProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(newProgress);
    };
  
    return (
        <>
      <div className="custom-audio-controls">
        {/* Play/Pause button */}
        {/* <button className="play-pause" onClick={togglePlayPause}>
          {isPlaying ? '⏸' : '▶'}
        </button> */}
  
        {/* Progress bar */}
        {/* <div className="progress-bar">
          <div className="progress-indicator" style={{ width: `${progress}%` }}></div>
        </div> */}
  
        {/* Audio element without controls */}
        <audio
          ref={audioRef}
          onTimeUpdate={updateProgressBar}
          src="https://soundbible.com/grab.php?id=1926&type=mp3" type="audio/mp3"
          ></audio>
       
      </div>
        {/* <div className="audiobtn">
            <button className="clear">
                Clear
            </button>
            <button className="submit">
                Submit
            </button>
        </div> */}
          </>
    );
  };
  
export default Audio