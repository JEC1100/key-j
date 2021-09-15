require('dotenv').config();

let SpotifyWebApi = require('spotify-web-api-node');

let spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const songsLikeThis = (song) => {
  const audio = song[0];
  const response = new Promise((res, rej) => {
    spotifyApi.clientCredentialsGrant().then(
      function(data) {
        spotifyApi.setAccessToken(data.body['access_token']);
        return spotifyApi.getRecommendations({
          target_danceability: audio.danceability,
          target_energy: audio.energy,
          target_key: audio.key,
          target_mode: audio.mode,
          target_valence: audio.valence,
          target_tempo: audio.tempo,
          target_speechiness: audio.speechiness,
          target_instrumentalness: audio.instrumentalness,
          seed_tracks: [audio.id],
        });
      })
      .then(function(data) {
        let recommendations = data.body;
        res(recommendations);
      },
      function(err) {
        rej('Something went wrong!', err);
      });
  });
  return response;
};

module.exports = songsLikeThis;
