import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import SongInfo from './SongInfo';
import Searchbar from './Searchbar';
import { TrackAudioFeatures } from './track_audio';

const App = () => {
  const [songTitle, setSongTitle] = useState('');

  const submitSongName = (songname) => {
    setSongTitle(songname);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="searchbar">
          <Searchbar submit={submitSongName} />
        </div>
        <Switch>
          <Route
            component={() => <SongInfo songTitle={songTitle} />}
            path="/tracks"
            exact
          />
          <Route component={TrackAudioFeatures} path="/:id" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
