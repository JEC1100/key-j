import React, { useState } from 'react';
import SongInfo from './SongInfo';
import Searchbar from './Searchbar';

const App = () => {
  const [songTitle, setSongTitle] = useState('');

  const submitSongName = (songname) => {
    setSongTitle(songname);
  };

  return (
    <div className="app">
      <h1>Key-J</h1>
      <div className="searchbar">
        <Searchbar submit={submitSongName} />
      </div>
      <div className="info-table">
        {songTitle ? <SongInfo songTitle={songTitle} /> : null}
      </div>
    </div>
  );
};

export default App;
