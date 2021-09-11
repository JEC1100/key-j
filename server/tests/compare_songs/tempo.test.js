const tempoMatch = require('../../src/compare_songs/tempo');

describe('Calculating tempo match', () => {
  it('returns the match between two numbers', () => {
    expect(tempoMatch(100, 160)).toEqual('Not a great tempo match');
    expect(tempoMatch(100, 100)).toEqual('Good tempo match!');
    expect(tempoMatch(180, 172.8)).toEqual('Not a great tempo match');
  });
});
