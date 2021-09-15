import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Searchbar from './Searchbar';
import SongInfo from './SongInfo';
import SongsLikeThis from './SongsLikeThis';


const formatEnergy = require('../helperFunctions/formatting/energy');
const formatDanceability = require('../helperFunctions/formatting/danceability');
const formatKey = require('../helperFunctions/formatting/key');
const formatMood = require('../helperFunctions/formatting/mood');



export const TrackAudioFeatures = () => {
  const [state, setState] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [songTitle, setSongTitle] = useState('');
  const [compareSongs, setCompareSongs] = useState(false);
  const params = useParams();

  const submitSongName = (songname) => {
    setSongTitle(songname);
    setSubmitted(true);
    setCompareSongs(false);
  };

  const seeSimilarSongs = () => {
    setCompareSongs(true);
  };

  const searchbarMessage = 'Enter another song to compare track info';

  useEffect(() => {
    fetch('/api/track_audio', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        songId: params.id,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(res);
        }
      })
      .then((response) => setState(response.audioFeatures));
  }, []);
  return(
  <div>
    <div className='song-container'>
      <div className='song-image'>
        <img src={"https://i.scdn.co/image/" + params.albumUrl} style={{ height: 240 }}/>
      </div>
      <div className='song-section'>
        <h2>{params.trackName}</h2>
        <h3> Song Statistics: </h3>
        <p> ENERGY: {formatEnergy(state.energy)} <br></br>
        DANCEABILITY: {formatDanceability(state.danceability)} <br></br>
        TEMPO: {state.tempo} BPM <br></br>
        KEY: {formatKey(state.key)} {state.mode === 1 ? 'Major' : 'Minor'}<br></br>
        MOOD{formatMood(state.valence)} 
        </p>
      </div>
      <Searchbar
        submit={submitSongName}
        redirect={false}
        placeholder={searchbarMessage}
      />
      <button className="similar-songs-button" onClick={seeSimilarSongs}>
        See Similar Songs
      </button>
      {compareSongs ? <SongsLikeThis song={[state]} /> : null}
      {submitted ? (
        <SongInfo songTitle={songTitle} redirect={false} songAId={params.id}/>
      ) : null}
    </div>
  </div>
  );
};
