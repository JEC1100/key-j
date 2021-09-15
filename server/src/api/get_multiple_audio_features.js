require('dotenv').config();

let SpotifyWebApi = require('spotify-web-api-node');

let spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const getMultipleAudioFeatures = (songOneId, songTwoId) => {
  const response = new Promise((res, rej) => {
    spotifyApi
      .clientCredentialsGrant()
      .then(function(data) {
        spotifyApi.setAccessToken(data.body['access_token']);
        return spotifyApi.getAudioFeaturesForTracks([songOneId, songTwoId]);
      })
      .then(
        function(data) {
          let result = data.body.audio_features;
          res(result);
        },
        function(err) {
          rej('Something went wrong!', err);
        }
      );
  });
  return response;
};

module.exports = getMultipleAudioFeatures;
