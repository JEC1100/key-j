import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Searchbar from './Searchbar';
import SongInfo from './SongInfo';
import SongsLikeThis from './SongsLikeThis';

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
  return(<div>
    <div className='song-container'>
    <div className='song-image'>
    <img src={"https://i.scdn.co/image/" + params.albumUrl} style={{ height: 240 }}/>
    </div>
      <div className='song-section'>
      <h2>Song Statistics</h2>
        <p> ENERGY: {state.energy} <br></br>
        DANCEABILITY: {state.danceability} <br></br>
        TEMPO: {state.tempo} BPM <br></br>
        KEY: {state.key} {state.mode}<br></br>
        MOOD {state.mood} 
        </p>
      </div>
      <Searchbar submit={submitSongName} redirect={false} />
      <button className="similar-songs-button" onClick={seeSimilarSongs}>
        See Similar Songs
      </button>
      {compareSongs ? <SongsLikeThis song={[state]} /> : null}
      {submitted ? (
        <SongInfo songTitle={songTitle} redirect={false} songAId={params.id} />
      ) : null}
    </div>
  );
};
