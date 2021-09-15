const formatSongs = (songs) => {
  let arr = [];
  songs.forEach(song => {
    arr.push({
      name: song.name,
      artist: song.artists[0].name,
      artistId: song.artists[0].id,
      id: song.id,
      uri: song.uri,
      albumUrl: song.album.images[0].url,
      album: song.album.name,
      albumId: song.album.id});
  });
  return arr;
};

module.exports = formatSongs;
