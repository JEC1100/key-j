import React from 'react';
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom"
import Searchbar from './Searchbar';
import SongInfo from './SongInfo';

export const TrackAudioFeatures = () => {
  const [state, setState] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [songTitle, setSongTitle] = useState('');
  const params = useParams()

  const submitSongName = (songname) => {
    setSongTitle(songname)
    setSubmitted(true)
  };

  useEffect(() => {
    fetch('/api/track_audio', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        songId: params.id
      })
    }).then(res => {
      if(res.ok){
        return res.json()
      } else {
        console.log(res)
      }
    }).then(response => setState(response.audioFeatures))
  },[])

if (submitted === false){
  return(<div>
    <p> ENERGY: {state.energy} <br></br>
    DANCEABILITY: {state.danceability} <br></br>
    TEMPO: {state.tempo} BPM <br></br>
    KEY: {state.key} {state.mode}<br></br>
    MOOD {state.mood} 
    </p>
    <Searchbar submit={submitSongName} redirect={false} />
  </div>)
} else { 
  return (
  <div>
    <p> ENERGY: {state.energy} <br></br>
        DANCEABILITY: {state.danceability} <br></br>
        TEMPO: {state.tempo} BPM <br></br>
         KEY: {state.key} {state.mode}<br></br>
        MOOD {state.mood} 
    </p>
    <SongInfo songTitle={songTitle} redirect={false}/>
  </div>
  )
}
}
