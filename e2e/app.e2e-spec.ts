import { LegoPage } from './app.po';

describe('lego App', function() {
  let page: LegoPage;

  beforeEach(() => {
    page = new LegoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
