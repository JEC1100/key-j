import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export const ArtistTopTracks = () => {
  const [state, setState] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch('/api/artist_top_tracks', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        artistId: params.artistId,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(res);
        }
      })
      .then((response) => setState(response.artist_tracks));
  }, []);

  return (
    <div>
      <div className="song-container">
        <h2>Top 10 songs by {params.artistName}</h2>
      </div>
      {state.length > 0 &&
        state.map((e) => (
          <div className="song-container" key={uuidv4()}>
            <div className="song-image">
              <img src={e.albumUrl} style={{ height: 240 }} />
            </div>
            <div className="song-section">
              <a
                href={
                  '/track/' +
                  e.id +
                  '/' +
                  e.albumUrl.split('/')[4] +
                  '/' +
                  e.name
                }
                key={uuidv4()}
              >
                <div className="song-div">
                  Song: <h2>{e.name}</h2>
                  <h4>Click to see song info</h4>
                </div>
              </a>
              <a
                href={[
                  '/album',
                  e.album,
                  e.albumId,
                  e.albumUrl.split('/')[4],
                ].join('/')}
                key={uuidv4()}
              >
                <div className="song-div">
                  Album: <h2>{e.album}</h2>
                  <h4>Click to see track listing</h4>
                </div>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ArtistTopTracks;
