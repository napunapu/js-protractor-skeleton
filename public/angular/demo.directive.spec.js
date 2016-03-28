var should = require('should');

describe('reader chapter', function() {

  it('should have target blank in links', function() {
    browser.get(serverUrl + '/courses/johdatus-yhteiskuntatilastotieteeseen/teema');
    browser.driver.wait(function() {
      return browser.driver.isElementPresent(by.css('.reader-block a'));
    });
    // scroll down
    browser.executeScript('$("#reader-chapter-container").scrollTop(500);').then(function() {
      var link = $$('.reader-block a').first();
      // check target
      link.getAttribute('target').then(function(target) {
        target.should.equal('_blank');
      });
    });
  });

});
