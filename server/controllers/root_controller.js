exports.root = (req, res) => {
  res.json({
    "songs": [{
      name: 'Killing in the name of', 
      artist: 'Rage against the machine',
      id: 1
    }, {
      name: 'Yesterday', 
      artist: 'Beatles',
      id: 2
    }]
  });
};
