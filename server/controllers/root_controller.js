const getTracks = require('../src/get_tracks')

exports.root = (req, res) => {
  getTracks(req.body.songName).then(data => {
    res.json({
      "songs": data
    });
  });
};
