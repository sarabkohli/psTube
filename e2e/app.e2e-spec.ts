import { PsTubePage } from './app.po';

describe('ps-tube App', function() {
  let page: PsTubePage;

  beforeEach(() => {
    page = new PsTubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
