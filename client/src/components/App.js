import React from 'react';
import Searchbar from './Searchbar';

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
       

      </div>
    </div>
  );
};

export default App;
