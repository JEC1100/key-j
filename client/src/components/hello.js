import React from 'react';
import {useEffect, useState} from 'react';

export const Hello = () => {
  const [initialState, setInitialState] = useState([])

  useEffect(() => {
    fetch('/api/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        songName: 'master exploder'
      })
    }).then(res => {
      if(res.ok){
        return res.json()
      } else {
        console.log(res)
      }
    }).then(jsonResponse => setInitialState(jsonResponse.songs))
  },[])

  return(<div>
    {initialState.length > 0 && initialState.map((e, i) => <li key={i}><a href={'/' + e.id} key='audio-features'>{e.name} by {e.artist}</a></li>)}
  </div>)
}