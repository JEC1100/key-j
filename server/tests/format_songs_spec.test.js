const formatSongs = require('../src/formatting/format_songs');

let tracks = [{
  name: 'Single Ladies',
  album: {
    name: 'Queen B',
    images: [{url: 'url'}],
  },
  year: 2012,
  id: 1,
  artists: [{
    name: 'Beyonce',
    id: 300,
  }],
}];

describe('formatting songs', () => {
  it('returns the song name', () => {
    expect(formatSongs(tracks)).toEqual(
      [ {album: 'Queen B',
        albumUrl: 'url',
        artist: 'Beyonce',
        artistId: 300,
        id: 1,
        name: 'Single Ladies',
        uri: undefined,
      } ]
    );
  });
});
