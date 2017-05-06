import { ShabbatClustersWebPage } from './app.po';

describe('shabbat-clusters-web App', () => {
  let page: ShabbatClustersWebPage;

  beforeEach(() => {
    page = new ShabbatClustersWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
