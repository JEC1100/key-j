import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


const SongInfo = (props) => {
  const [initialState, setInitialState] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        songName: props.songTitle,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch data.');
        }
        return res.json();
      })
      .then((jsonResponse) => setInitialState(jsonResponse.songs))
      .catch((err) => {
        setError(err.message);
      });
  }, [props.songTitle]);

  return(
  <div>
    {error && <div>{error}</div>}
    {initialState.length > 0 && initialState.map((e, i) => <li key={i}><a href={'/' + e.id} key='audio-features'>{e.name} by {e.artist}</a></li>)}
  </div>
  )
}

SongInfo.propTypes = {
  props: PropTypes.func,
  songTitle: PropTypes.string,
};

export default SongInfo;
