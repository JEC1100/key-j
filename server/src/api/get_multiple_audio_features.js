require('dotenv').config();

let SpotifyWebApi = require('spotify-web-api-node');
// let compareSongs = require('../compare_songs/compare_songs');

let spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const getMultipleAudioFeatures = (songOneId, songTwoId) => {
  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      spotifyApi.setAccessToken(data.body['access_token']);
      return spotifyApi.getAudioFeaturesForTracks(
        [songOneId, songTwoId]
      );
    })
    .then(function(data) {
      let result = data.body.audio_features;
      // let comparison = compareSongs(result[0], result[1]);
      console.log(result);
      return result;
    },
    function(err) {
      console.log('Something went wrong!', err);
    });
};

getMultipleAudioFeatures('4iV5W9uYEdYUVa79Axb7Rh', '3Qm86XLflmIXVm1wcwkgDK');


// ['4iV5W9uYEdYUVa79Axb7Rh', '3Qm86XLflmIXVm1wcwkgDK']
