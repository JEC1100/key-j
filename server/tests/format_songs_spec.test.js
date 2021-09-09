const formatSongs = require('../src/format_songs');

let tracks = [{
  name: 'Single Ladies',
  album: 'Queen B',
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
      [ { name: 'Single Ladies', artist: 'Beyonce', id: 1 } ]
    );
  });
});
