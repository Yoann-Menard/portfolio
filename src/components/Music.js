import React from 'react';
import audio from '../assets/audio/music.mp3';

const Music = () => {
  window.onload = function () {
    this.document.getElementById('layer').play();
  };

  return (
    <audio src={audio} id='layer' loop='loop'>
      Your browser does not support the
      <code>audio</code> element.
    </audio>
  );
};

export default Music;
