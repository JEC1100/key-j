require('dotenv').config();

let SpotifyWebApi = require('spotify-web-api-node');

let spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const audioFeatures = (songId) => {
  const response = new Promise((res, rej) => {
    spotifyApi.clientCredentialsGrant().then(
      function(data) {
        spotifyApi.setAccessToken(data.body['access_token']);
        return spotifyApi.getAudioFeaturesForTrack(songId);
      })
      .then(function(data) {
        const audio_features = data.body;
        res(audio_features);
      },
      function(err) {
        rej('Something went wrong!', err);
      });
  });
  return response;
};

module.exports = audioFeatures;
