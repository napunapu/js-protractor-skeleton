var should = require('should');

describe('demo file', function() {

  it('should echo text', function() {
    browser.get(serverUrl + '/angular/demo.html');
    // type text
    $('#input').sendKeys('world');
    // check target
    $('#heading1').getText().then(function(text) {
      text.should.equal('Hello world');
    });
  });

});
