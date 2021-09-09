require('dotenv').config();
let SpotifyWebApi = require('spotify-web-api-node');
let formatSongs = require('./format_songs');

let spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const getTracks = (songName) => {
  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      spotifyApi.setAccessToken(data.body['access_token']);
      return spotifyApi.searchTracks(songName);
    })
    .then(function(data) {
      const tracks = data.body.tracks.items;
      return formatSongs(tracks);
    },
    function(err) {
      console.log('Something went wrong!', err);
    });
};

module.exports = getTracks;
