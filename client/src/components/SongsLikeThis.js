import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const SongsLikeThis = (props) => {
  const [state, setState] = useState([]);

  let song = props.song;
  let songid = song[0].id;

  useEffect(() => {
    fetch('/api/songs_like_this', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        song: props.song,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(res);
        }
      })
      .then((response) => setState(response.songs.tracks));
  }, []);

  return (
    <div className="similar-songs-list">
      {state.length > 0 &&
        state.map((e, i) => (
          <div className="similar-song" key={i}>
            <a href={'/' + songid + '/' + e.id} key="audio-features">
              {e.name} by {e.artists[0].name}
            </a>
          </div>
        ))}
    </div>
  );
};

SongsLikeThis.propTypes = {
  props: PropTypes.func,
  song: PropTypes.array,
};

export default SongsLikeThis;
