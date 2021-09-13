require('dotenv').config();

let SpotifyWebApi = require('spotify-web-api-node');
let formatSongs = require('../formatting/format_songs');

let spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const getTracks = (songName) => {
  const response = new Promise((res, rej) => {
    spotifyApi.clientCredentialsGrant().then(
      function(data) {
        spotifyApi.setAccessToken(data.body['access_token']);
        return spotifyApi.searchTracks(songName);
      })
      .then(function(data) {
        const tracks = data.body.tracks.items;
        res(formatSongs(tracks));
      },
      function(err) {
        rej('Something went wrong and its all Pavs fault!', err);
      });
  });
  return response;
};

module.exports = getTracks;
