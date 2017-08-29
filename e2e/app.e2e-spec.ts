import { PrashantgautamPage } from './app.po';

describe('prashantgautam App', () => {
  let page: PrashantgautamPage;

  beforeEach(() => {
    page = new PrashantgautamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
