const formatKey = require('../../src/formatting/key');

describe('formatting key', () => {
  it('returns a key for each number', () => {
    expect(formatKey(0)).toEqual('C');
    expect(formatKey(1)).toEqual('C#/Db');
    expect(formatKey(2)).toEqual('D');
    expect(formatKey(3)).toEqual('D#/Eb');
    expect(formatKey(4)).toEqual('E');
    expect(formatKey(5)).toEqual('F');
    expect(formatKey(6)).toEqual('F#Gb');
    expect(formatKey(7)).toEqual('G');
    expect(formatKey(8)).toEqual('G#/Ab');
    expect(formatKey(9)).toEqual('A');
    expect(formatKey(10)).toEqual('A#/Bb');
    expect(formatKey(11)).toEqual('B');
  });
});
