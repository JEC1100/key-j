require('dotenv').config();

let SpotifyWebApi = require('spotify-web-api-node');
let compareSongs = require('../compare_songs/compare_audio_features')

let spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const compareAudioFeatures = () => {
  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      spotifyApi.setAccessToken(data.body['access_token']);
      return spotifyApi.getAudioFeaturesForTracks(
        ['4iV5W9uYEdYUVa79Axb7Rh', '3Qm86XLflmIXVm1wcwkgDK']
      );
    })
    .then(function(data) {
      let result = data.body.audio_features;
      let comparison = compareSongs(result[0], result[1])
      console.log(comparison);
    },
    function(err) {
      console.log('Something went wrong!', err);
    });
};

compareAudioFeatures();
