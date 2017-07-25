import { CompodocInterfaceIssuePage } from './app.po';

describe('compodoc-interface-issue App', () => {
  let page: CompodocInterfaceIssuePage;

  beforeEach(() => {
    page = new CompodocInterfaceIssuePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
