/* eslint-disable no-undef */

describe('Key-j', () => {
  beforeAll(async() => {
    await page.goto('http://localhost:3000/');
  });

  it('should display "Key-J" text on page', async() => {
    await expect(page).toMatch('Key-J');
  });

  it('can search for songs', async() => {
    await page.type('input#songname', 'another brick in the');
    await page.click('[type="submit"]');
    await expect(page).toMatch('Another Brick in the Wall');
  });
});
