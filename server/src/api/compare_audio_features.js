require('dotenv').config();

let SpotifyWebApi = require('spotify-web-api-node');

let spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const compareAudioFeatures = () => {
  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      spotifyApi.setAccessToken(data.body['access_token']);
      return spotifyApi.getAudioFeaturesForTracks(
        ['0GjEhVFGZW8afUYGChu3Rr', '3Qm86XLflmIXVm1wcwkgDK']
      );
    })
    .then(function(data) {
      let result = data.body.audio_features;
      console.log(result);
    },
    function(err) {
      console.log('Something went wrong!', err);
    });
};

compareAudioFeatures();
