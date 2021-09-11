import React from 'react';
import { Hello } from './hello';
import Searchbar from './Searchbar';
import { TrackAudioFeatures } from './track_audio';

const App = () => {
  const submitSongName = (songname) => {
   console.log(songname.value)
  };
  return (
    <div className="app">
      <h1>Key-J</h1>
      <div className="searchbar">
        <Searchbar submit={submitSongName} />
      </div>
      <div className="info-table">
        <Hello />
        <TrackAudioFeatures />
      </div>
    </div>
  );
};

export default App;
