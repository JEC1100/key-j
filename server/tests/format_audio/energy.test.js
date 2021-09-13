const formatEnergy = require('../../src/format_audio/energy');

describe('formatting energy', () => {
  it("returns 'Low' for values below 0.3", () => {
    expect(formatEnergy(0.04)).toEqual('Low');
    expect(formatEnergy(0.299)).toEqual('Low');
  });
  it("returns 'Medium' for values between 0.3 and 0.6", () => {
    expect(formatEnergy(0.34)).toEqual('Medium');
    expect(formatEnergy(0.58)).toEqual('Medium');
  });
  it("returns 'High' for values between 0.6 and 0.9", () => {
    expect(formatEnergy(0.6)).toEqual('High');
    expect(formatEnergy(0.876)).toEqual('High');
  });
  it("returns 'VERY HIGH' for values between 0.9 and 1", () => {
    expect(formatEnergy(0.987)).toEqual('VERY HIGH');
    expect(formatEnergy(1)).toEqual('VERY HIGH');
  });
});
