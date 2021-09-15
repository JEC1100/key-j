require('dotenv').config();

let SpotifyWebApi = require('spotify-web-api-node');
let formatSongs = require('../formatting/format_songs');

let spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const artistTopTracks = (artistId) => {
  const response = new Promise((res, rej) => {
    spotifyApi.clientCredentialsGrant().then(
      function(data) {
        spotifyApi.setAccessToken(data.body['access_token']);
        return spotifyApi.getArtistTopTracks(artistId, 'GB');
      })
      .then(function(data) {
        const artist_tracks = data.body.tracks;
        res(formatSongs(artist_tracks));
      },
      function(err) {
        rej('Something went wrong!', err);
      });
  });
  return response;
};

module.exports = artistTopTracks;
