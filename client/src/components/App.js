import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';
import { Hello } from './hello';
import Searchbar from './Searchbar';
import { TrackAudioFeatures } from './track_audio';

const App = () => {
  const submitSongName = (songname) => {
   console.log(songname.value)
  };
  // return (
  //   <div className="app">
  //     <h1>Key-J</h1>
  //     <div className="searchbar">
  //       <Searchbar submit={submitSongName} />
  //     </div>
  //     <div className="info-table">
  //       <Hello />
  //       <TrackAudioFeatures />
  //     </div>
  //   </div>
  // );
  return (
    <div className='App'> 
    <BrowserRouter>
      <div className="searchbar">
         <Searchbar submit={submitSongName} />
      </div>
    <Switch>
        <Route component={Hello} path="/" exact />
        <Route component={TrackAudioFeatures} path="/:id" />
    </Switch>
    </BrowserRouter>
    </div>
  )
};

export default App;
