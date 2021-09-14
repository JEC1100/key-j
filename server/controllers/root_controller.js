const getTracks = require('../src/api/get_tracks');
const audioFeatures = require('../src/api/get_track_audio_features');
const songsLikeThis = require('../src/api/get_songs_like_this');
// eslint-disable-next-line max-len
const getMultipleAudioFeatures = require('../src/api/get_multiple_audio_features');
const artistTopTracks = require('../src/api/get_artists_top_tracks');

exports.root = (req, res) => {
  getTracks(req.body.songName).then((data) => {
    res.json({
      songs: data,
    });
  });
};

exports.trackAudio = (req, res) => {
  audioFeatures(req.body.songId).then((data) => {
    res.json({
      audioFeatures: data,
    });
  });
};

exports.songsLikeThis = (req, res) => {
  songsLikeThis(req.body.song).then(data => {
    res.json({
      songs: data,
    });
  });
};

exports.compare = (req, res) => {
  let request = req.body.songId;
  getMultipleAudioFeatures(request.songAid, request.songBid).then((data) => {
    res.json({
      songs: data,
    });
  });
};

exports.artistTopTracks = (req, res) => {
  artistTopTracks(req.body.artistId).then((data) => {
    res.json({
      artist_tracks: data
    })
  })
}
