const formatKey = require('../../helperFunctions/formatting/key');

describe('formatting key', () => {
  it('returns a key for each number', () => {
    expect(formatKey(0, 1)).toEqual('C maj');
    expect(formatKey(1, 0)).toEqual('C#/Db min');
    expect(formatKey(2, 1)).toEqual('D maj');
    expect(formatKey(3, 0)).toEqual('D#/Eb min');
    expect(formatKey(4, 1)).toEqual('E maj');
    expect(formatKey(5, 0)).toEqual('F min');
    expect(formatKey(6, 1)).toEqual('F#Gb maj');
    expect(formatKey(7, 0)).toEqual('G min');
    expect(formatKey(8, 1)).toEqual('G#/Ab maj');
    expect(formatKey(9, 0)).toEqual('A min');
    expect(formatKey(10, 1)).toEqual('A#/Bb maj');
    expect(formatKey(11, 0)).toEqual('B min');
  });
});
