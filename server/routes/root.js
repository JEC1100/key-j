const express = require('express');
const router = express.Router();
const root = require('../controllers/root_controller');

router.post('/', root.root);

router.post('/track_audio', root.trackAudio);

module.exports = router;