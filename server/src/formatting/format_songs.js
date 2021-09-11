const formatSongs = (songs) => {
  let arr = [];
  songs.forEach(song => {
    arr.push({ name: song.name, artist: song.artists[0].name, id: song.id});
  });
  return arr;
};

module.exports = formatSongs;
