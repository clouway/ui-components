'use strict';
/* Kept for sample only */
/* https://github.com/angular/protractor/blob/master/docs/toc.md */
describe('my app', function() {

  it('should go to index page', function() {
    browser.get('test-page.html');
    
    var testElement = element(by.id('test'));
    expect(testElement.getText()).toBe('Hello');
    //expect(browser.getLocationAbsUrl()).toMatch("/test-page.html");
  });

});

