import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const formatEnergy = require("../helperFunctions/formatting/energy");
const formatDanceability = require("../helperFunctions/formatting/danceability");
const formatKey = require("../helperFunctions/formatting/key");
const formatMood = require("../helperFunctions/formatting/mood");
const calculateSimilarity = require("../helperFunctions/calculate_similarity");
const calculateKeySimilarity = require("../helperFunctions/calculate_key_similarity");

export const CompareSongs = () => {
  let params = useParams();
  const [songOneInfo, setSongOneInfo] = useState({});
  const [songTwoInfo, setSongTwoInfo] = useState({});

  useEffect(() => {
    fetch("/api/compare", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
        console.log("here", songOneInfo, songTwoInfo);
      });
  }, []);

  const energyBarLength = (songInfo) => {
    return songInfo.energy * 10;
  };

  const danceabilityBarLength = (songInfo) => {
    return songInfo.danceability * 10;
  };

  const tempoBarLength = (songInfo) => {
    return (songInfo.tempo * 10) / 250;
  };

  const keyBarLength = (songInfo) => {
    return (songInfo.key * 10) / 12;
  };

  const moodBarLength = (songInfo) => {
    return songInfo.valence * 10;
  };

  return (
    <div className="container song-compare-container">
      <div className="col song-container">
        <div className="col song-image">
          <img
            src={"https://i.scdn.co/image/" + params.songAalbumUrl}
            style={{ height: 200 }}
          />
        </div>
        <div className="song-info">
          <h2>{params.songAName}</h2>
          <h4>Song Statistics:</h4>
          <p>
            ENERGY: {formatEnergy(songOneInfo.energy)} <br></br>
            DANCEABILITY: {formatDanceability(songOneInfo.danceability)}
            <br></br>
            TEMPO: {songOneInfo.tempo} BPM <br></br>
            KEY: {formatKey(songOneInfo.key)}
            <br></br>
            MOOD {formatMood(songOneInfo.valence)}
          </p>
        </div>
      </div>
      <div className="song-compare-div">
        <h2>Comparison</h2>
        Energy
        <div className="chart-row">
          <div className="chart-bar-box left">
            <div
              className="chart-bar"
              style={{ width: `${energyBarLength(songOneInfo)}vw` }}
            ></div>
          </div>
          <p>{calculateSimilarity(songOneInfo.energy, songTwoInfo.energy)}%</p>
          <div className="chart-bar-box right">
            <div
              className="chart-bar"
              style={{ width: `${energyBarLength(songTwoInfo)}vw` }}
            ></div>
          </div>
        </div>
        Danceability
        <div className="chart-row">
          <div className="chart-bar-box left">
            <div
              className="chart-bar"
              style={{ width: `${danceabilityBarLength(songOneInfo)}vw` }}
            ></div>
          </div>
          <p>
            {calculateSimilarity(
              songOneInfo.danceability,
              songTwoInfo.danceability
            )}
            %
          </p>
          <div className="chart-bar-box right">
            <div
              className="chart-bar"
              style={{ width: `${danceabilityBarLength(songTwoInfo)}vw` }}
            ></div>
          </div>
        </div>
        Tempo
        <div className="chart-row">
          <div className="chart-bar-box left">
            <div
              className="chart-bar"
              style={{ width: `${tempoBarLength(songOneInfo)}vw` }}
            ></div>
          </div>
          <p>{calculateSimilarity(songOneInfo.tempo, songTwoInfo.tempo)}%</p>
          <div className="chart-bar-box right">
            <div
              className="chart-bar"
              style={{ width: `${tempoBarLength(songTwoInfo)}vw` }}
            ></div>
          </div>
        </div>
        Key
        <div className="chart-row">
          <div className="chart-bar-box left">
            <div
              className="chart-bar"
              style={{ width: `${keyBarLength(songOneInfo)}vw` }}
            ></div>
          </div>
          <p>
            {Math.round(
              calculateKeySimilarity(
                songOneInfo.key,
                songTwoInfo.key,
                songOneInfo.mode,
                songTwoInfo.mode
              )
            )}
            %
          </p>
          <div className="chart-bar-box right">
            <div
              className="chart-bar"
              style={{ width: `${keyBarLength(songTwoInfo)}vw` }}
            ></div>
          </div>
        </div>
        Mood
        <div className="chart-row">
          <div className="chart-bar-box left">
            <div
              className="chart-bar"
              style={{ width: `${moodBarLength(songOneInfo)}vw` }}
            ></div>
          </div>
          <p>
            {calculateSimilarity(songOneInfo.valence, songTwoInfo.valence)}%
          </p>
          <div className="chart-bar-box right">
            <div
              className="chart-bar"
              style={{ width: `${moodBarLength(songTwoInfo)}vw` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="song-container">
        <div className="song-image">
          <img
            src={"https://i.scdn.co/image/" + params.songBalbumUrl}
            style={{ height: 180 }}
          />
        </div>
        <div className="song-info">
          <h2>{params.songBName}</h2>
          <h4>Song Statistics</h4>
          <p>
            ENERGY: {formatEnergy(songTwoInfo.energy)} <br></br>
            DANCEABILITY: {formatDanceability(songTwoInfo.danceability)}
            <br></br>
            TEMPO: {songTwoInfo.tempo} BPM <br></br>
            KEY: {formatKey(songTwoInfo.key)}
            <br></br>
            MOOD {formatMood(songTwoInfo.valence)}
          </p>
        </div>
      </div>
    </div>
  );
};
