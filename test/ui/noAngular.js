/**
 * See conf.js
 */

var should = require('should');

beforeEach(function() {
  isAngularSite(false);
});

describe('user creation', function() {
  this.slow(3000);
  this.timeout(5000);

  it('should create an admin user', function() {
    browser.get(serverUrl + '/admin/add');

    $('input[name="email"]').sendKeys('normaladmin@vuolearning.fi');
    $('input[name="username"]').sendKeys('normaladmin');
    $('input[name="password"]').sendKeys('fgh');
    $('input[name="confirm"]').sendKeys('fgh');
    var createButton = $('button[class="success"]');
    createButton.should.not.equal(null);
    createButton.click();
    $('.superadmin-list').getText().then(function (text) {
      text.should.containEql('normaladmin@vuolearning.fi');
    });
  });
});
