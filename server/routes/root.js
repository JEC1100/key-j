const express = require('express');
const router = express.Router();
const root = require('../controllers/root_controller');

router.post('/', root.root);

router.post('/compare', root.compare);

router.post('/track_audio', root.trackAudio);

router.post('/songs_like_this', root.songsLikeThis);

router.post('/artist_top_tracks', root.artistTopTracks);

router.post('/get_album_tracks', root.albumTracks);

module.exports = router;
