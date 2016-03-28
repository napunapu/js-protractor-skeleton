/**
 * See conf.js
 */

var should = require('should');

beforeEach(function() {
  isAngularSite(false);
});

describe('non-Angular file', function() {

  it('should fetch data', function() {
    browser.get(serverUrl + '/noAngular/demo.html');

    var fetchButton = $('#btn');
    fetchButton.should.not.equal(null);
    fetchButton.click();
    $('#insertion').getText().then(function (text) {
      text.should.containEql('{"json_response":"ok"}');
    });
  });
});
