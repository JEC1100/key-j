import React from 'react';
import {useEffect, useState} from 'react';

export const TrackAudioFeatures = () => {
  const [state, setState] = useState([])

  useEffect(() => {
    fetch('/api/track_audio', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        songId: '4DAaQ5InUO23d8yNRbB0Yj'
      })
    }).then(res => {
      if(res.ok){
        return res.json()
      } else {
        console.log(res)
      }
    }).then(response => setState(response.audioFeatures))
  },[])

  return(<div>
    <p> ENERGY: {state.energy} TEMPO: {state.tempo}</p>
  </div>)
}
