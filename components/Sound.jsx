'use client';
import React, { useState, useEffect } from 'react';
import soundFile from '@/public/assets/audio/sounds.mp3';

const Sound = () => {
  const [isSoundMuted, setIsSoundMuted] = useState(false);
  let audio;

  useEffect(() => {
    if (typeof Audio !== 'undefined') {
      audio = new Audio(soundFile);
      audio.loop = true; // Loop the audio
      audio.muted = isSoundMuted; // Set initial muted status
      audio.play();
    }

    // Clean up the audio element when the component unmounts
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [isSoundMuted]); // Re-run effect when isSoundMuted changes

  const handleToggleSound = () => {
    setIsSoundMuted(!isSoundMuted);
  };

  return (
    <button onClick={handleToggleSound}>
      {isSoundMuted ? 'Unmute Sound' : 'Mute Sound'}
    </button>
  );
};

export default Sound;
