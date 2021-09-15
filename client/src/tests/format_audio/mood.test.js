const formatMood = require('../../helperFunctions/formatting/mood');

describe('formatting mood', () => {
  it("returns ':'(' for values below 0.2", () => {
    expect(formatMood(0.05)).toEqual("😢");
    expect(formatMood(0.157)).toEqual("😢");
  });
  it("returns ':(' for values between 0.2 and 0.4", () => {
    expect(formatMood(0.355)).toEqual('🙁');
    expect(formatMood(0.2)).toEqual('🙁');
  });
  it("returns ':|' for values between 0.4 and 0.6", () => {
    expect(formatMood(0.478)).toEqual('😐');
    expect(formatMood(0.583)).toEqual('😐');
  });
  it("returns ':)' for values between 0.6 and 0.8", () => {
    expect(formatMood(0.6)).toEqual('🙂');
    expect(formatMood(0.778)).toEqual('🙂');
  });
  it("returns ':D' for values between 0.8 and 1", () => {
    expect(formatMood(0.934)).toEqual('😄');
    expect(formatMood(1)).toEqual('😄');
  });
});
