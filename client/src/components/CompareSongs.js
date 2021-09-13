import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const calculateSimilarity = require('../helperFunctions/calculate_similarity');

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

  const energySimilarity = calculateSimilarity(
    songOneInfo.energy,
    songTwoInfo.energy
  );
  const danceabilitySimilarity = calculateSimilarity(
    songOneInfo.danceability,
    songTwoInfo.danceability
  );
  const tempoSimilarity = calculateSimilarity(
    songOneInfo.tempo,
    songTwoInfo.tempo
  );
  const keySimilarity = calculateSimilarity(songOneInfo.key, songTwoInfo.key);
  const moodSimilarity = calculateSimilarity(
    songOneInfo.valence,
    songTwoInfo.valence
  );

  return (
    <div>
      <table>
        <tr>
          <th></th>
          <th>Song 1</th>
          <th>Similarity</th>
          <th>Song 2</th>
        </tr>
        <tr>
          <td>Energy</td>
          <td>{songOneInfo.energy}</td>
          <td>{energySimilarity}%</td>
          <td>{songTwoInfo.energy}</td>
        </tr>
        <tr>
          <td>Danceability</td>
          <td>{songOneInfo.danceability}</td>
          <td>{danceabilitySimilarity}%</td>
          <td>{songTwoInfo.danceability}</td>
        </tr>
        <tr>
          <td>Tempo</td>
          <td>{songOneInfo.tempo}</td>
          <td>{tempoSimilarity}%</td>
          <td>{songTwoInfo.tempo}</td>
        </tr>
        <tr>
          <td>Key</td>
          <td>{songOneInfo.key}</td>
          <td>{keySimilarity}%</td>
          <td>{songTwoInfo.key}</td>
        </tr>
        <tr>
          <td>Mood</td>
          <td>{songOneInfo.valence}</td>
          <td>{moodSimilarity}%</td>
          <td>{songTwoInfo.valence}</td>
        </tr>
      </table>
    </div>
  );
};
