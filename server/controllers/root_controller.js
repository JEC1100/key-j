const getTracks = require('../src/api/get_tracks');
const audioFeatures = require('../src/api/get_track_audio_features');
const songsLikeThis = require('../src/api/get_songs_like_this');

exports.root = (req, res) => {
  getTracks(req.body.songName).then(data => {
    res.json({
      songs: data,
    });
  });
};

exports.trackAudio = (req, res) => {
  audioFeatures(req.body.songId).then(data => {
    res.json({
      audioFeatures: data,
    });
  });
};

exports.songsLikeThis = (req, res) => {
  songsLikeThis(req.body.song).then(data => {
    res.json({
      songs: data,
    })
  })
}
