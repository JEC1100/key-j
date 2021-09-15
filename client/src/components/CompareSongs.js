import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// const calculateSimilarity = require('../helperFunctions/calculate_similarity');
// const calculateKeySimilarity = require('../helperFunctions/calculate_key_similarity');
// const formatKey = require('../helperFunctions/formatting/key');

export const CompareSongs = () => {
  let params = useParams();
  const [songOneInfo, setSongOneInfo] = useState({});
  const [songTwoInfo, setSongTwoInfo] = useState({});

  useEffect(() => {
    fetch('/api/compare', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        songId: params,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(res);
        }
      })
      .then((response) => {
        console.log(response.songs[0], response.songs[1]);
        setSongOneInfo(response.songs[0]);
        setSongTwoInfo(response.songs[1]);
        console.log('here', songOneInfo, songTwoInfo);
      });
  }, []);

  return (
    <div className='song-compare-container'>
      <div className='song-container'>
        <div className='song-image'>
        <img src={"https://i.scdn.co/image/" + params.songAalbumUrl} style={{ height: 200 }}/>
        </div>
      <div className='song-info'>
      <h2>Song Statistics</h2>
        <p> ENERGY: {} <br></br>
        DANCEABILITY: {} <br></br>
        TEMPO: {} BPM <br></br>
        KEY: {} {}<br></br>
        MOOD {} 
        </p>
      </div>
    </div>
      <div className='song-compare-div'>
        <h2>Comparison</h2>
          Energy
        <div className='chart-row'>
          <div className='chart-bar'></div>
          <p>90%</p>
          <div className='chart-bar'></div>
        </div>
          Danceability
        <div className='chart-row'>
          <div className='chart-bar'></div>
          <p>90%</p>
          <div className='chart-bar'></div>
        </div>
          Tempo
        <div className='chart-row'>
          <div className='chart-bar'></div>
          <p>90%</p>
          <div className='chart-bar'></div>
        </div>
          Key
        <div className='chart-row'>
          <div className='chart-bar'></div>
          <p>90%</p>
          <div className='chart-bar'></div>
        </div>
        Mood
        <div className='chart-row'>
          <div className='chart-bar'></div>
          <p>90%</p>
          <div className='chart-bar'></div>
        </div>
      </div>
      <div className='song-container'>
    <div className='song-image'>
      <img src={"https://i.scdn.co/image/" + params.songBalbumUrl} style={{ height: 180 }}/>
    </div>
      <div className='song-info'>
      <h2>Song Statistics</h2>
        <p> ENERGY: {} <br></br>
        DANCEABILITY: {} <br></br>
        TEMPO: {} BPM <br></br>
        KEY: {} {}<br></br>
        MOOD {} 
        </p>
      </div>
    </div>

      {/* <table>
        <tr>
          <th></th>
          <th>Song 1</th>
          <th>Similarity</th>
          <th>Song 2</th>
        </tr>
        <tr>
          <td>Energy</td>
          <td>{songOneInfo.energy}</td>
          <td>
            {calculateSimilarity(songOneInfo.energy, songTwoInfo.energy)}%
          </td>
          <td>{songTwoInfo.energy}</td>
        </tr>
        <tr>
          <td>Danceability</td>
          <td>{songOneInfo.danceability}</td>
          <td>
            {calculateSimilarity(
              songOneInfo.danceability,
              songTwoInfo.danceability
            )}
            %
          </td>
          <td>{songTwoInfo.danceability}</td>
        </tr>
        <tr>
          <td>Tempo</td>
          <td>{songOneInfo.tempo}</td>
          <td>{calculateSimilarity(songOneInfo.tempo, songTwoInfo.tempo)}%</td>
          <td>{songTwoInfo.tempo}</td>
        </tr>
        <tr>
          <td>Key</td>
          <td>{formatKey(songOneInfo.key, songOneInfo.mode)}</td>
          <td>{calculateKeySimilarity(
            songOneInfo.key,
            songTwoInfo.key,
            songOneInfo.mode,
            songTwoInfo.mode)}%</td>
          <td>{formatKey(songTwoInfo.key, songTwoInfo.mode)}</td>
        </tr>
        <tr>
          <td>Mood</td>
          <td>{songOneInfo.valence}</td>
          <td>
            {calculateSimilarity(songOneInfo.valence, songTwoInfo.valence)}%
          </td>
          <td>{songTwoInfo.valence}</td>
        </tr>
      </table> */}
    </div>
  );
};
