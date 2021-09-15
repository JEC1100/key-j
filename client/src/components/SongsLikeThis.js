import React from 'react';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';

export const SongsLikeThis = (props) => {
  
  const [state, setState] = useState([]);

  let song = props.song
  let songid = song[0].id

  useEffect(() => {
    fetch('/api/songs_like_this', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        song: props.song
      })
    }).then(res => {
      if(res.ok){
        return res.json()
      } else {
        console.log(res)
      }
    }).then(response => setState(response.songs.tracks))
  },[])

  return(
    <div>
    {state.length > 0 &&
      state.map((e, i) => (
        <li key={i}>
          <a href={'/compare/' + songid + '/' + e.id} key="audio-features">
            {e.name} by {e.artist}
          </a>
        </li>
      ))}
  </div>)
}

SongsLikeThis.propTypes = {
  props: PropTypes.func,
  song: PropTypes.array,
};

  export default SongsLikeThis;
