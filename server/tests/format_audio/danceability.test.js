const formatDanceability = require('../../src/formatting/danceability');

describe('formatting danceability', () => {
  it("returns 'Time for bed' for values below 0.2", () => {
    expect(formatDanceability(0.04)).toEqual('Time for bed');
    expect(formatDanceability(0.199)).toEqual('Time for bed');
  });
  it("returns 'Chill' for values between 0.2 and 0.4", () => {
    expect(formatDanceability(0.34)).toEqual('Chill');
    expect(formatDanceability(0.2)).toEqual('Chill');
  });
  it("returns 'In the middle' for values between 0.4 and 0.6", () => {
    expect(formatDanceability(0.4)).toEqual('In the middle');
    expect(formatDanceability(0.59)).toEqual('In the middle');
  });
  it("returns 'Warming up' for values between 0.6 and 0.8", () => {
    expect(formatDanceability(0.6)).toEqual('Warming up');
    expect(formatDanceability(0.778)).toEqual('Warming up');
  });
  it("returns 'Boogy baby!!' for values between 0.8 and 1", () => {
    expect(formatDanceability(0.934)).toEqual('Boogy baby!!');
    expect(formatDanceability(1)).toEqual('Boogy baby!!');
  });
});
