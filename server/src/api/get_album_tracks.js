require('dotenv').config();

let SpotifyWebApi = require('spotify-web-api-node');

let spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const albumTracks = (albumId) => {
  const response = new Promise((res, rej) => {
    spotifyApi.clientCredentialsGrant().then(
      function(data) {
        spotifyApi.setAccessToken(data.body['access_token']);
        return spotifyApi.getAlbum(albumId);
      })
      .then(function(data) {
        const album = data.body.tracks.items
        res(album)
      },
      function(err) {
        rej('Something went wrong!', err);
      });
  });
  return response;
};

module.exports = albumTracks;
