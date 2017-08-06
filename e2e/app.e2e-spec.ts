import { PixelatedPlanetPage } from './app.po';

describe('pixelated-planet App', function() {
  let page: PixelatedPlanetPage;

  beforeEach(() => {
    page = new PixelatedPlanetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
