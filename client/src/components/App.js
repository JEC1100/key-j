import React, { useState } from 'react';
import SongInfo from './SongInfo';
import Searchbar from './Searchbar';

const App = () => {
  const [songTitle, setSongTitle] = useState('');

  const submitSongName = (songname) => {
    console.log(songname.value);
    setSongTitle(songname.value);
  };

  if (songTitle) {
    return (
      <div className="app">
        <h1>Key-J</h1>
        <div className="searchbar">
          <Searchbar submit={submitSongName} />
        </div>
        <div className="info-table">{<SongInfo songTitle={songTitle} />}</div>
      </div>
    );
  } else {
    return (
      <div className="app">
        <h1>Key-J</h1>
        <div className="searchbar">
          <Searchbar submit={submitSongName} />
        </div>
        <div className="info-table"></div>
      </div>
    );
  }
};

export default App;
