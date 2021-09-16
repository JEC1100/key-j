import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export const SongsLikeThis = (props) => {
  const [state, setState] = useState([]);
  const params = useParams();

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
    <div>
      {state.length > 0 &&
        state.map((e, i) => (
          <div className="home-song-container song-container" key={i}>
          <div className='song-image'>
          <a href={['/album', e.album.name, e.album.id, e.album.images[0].url.split('/')[4]].join('/')} key={uuidv4()}>
              <img src={e.album.images[0].url} style={{ height: 180 }}/>
          </a>
          <a href={'/artist/' + e.artists[0].id + '/' + e.artists[0].name} key={uuidv4()}>
          <div className='song-artist'>
            <h2>{e.artists[0].name}</h2>
          </div>
          </a>
          </div>
          <div className='song-section'>
            <a href= {['/compare', songid, params.albumUrl, params.trackName, e.id, e.album.images[0].url.split('/')[4], e.name].join('/')} key={uuidv4()}>
          <div className='song-div'>
            <h2>{e.name}</h2>
            <p>{e.artists[0].name}</p>
          </div>
          </a>
        </div>
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
