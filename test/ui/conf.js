/**
 * protractor test/ui/setup/conf.js
 *
 * Example with command line parameters:
 * protractor --params.protocol=http --params.server=localhost --params.port=8020 test/ui/setup/conf.js
 */

var db = require('../../../models/index');
var exec = require('child_process').exec;


exports.config = {
  specs: [
    'createLogins.js',
    'createVoting.js',
    'importDocument.js',
    'edit.js',
    './../../../public/reader/**/*.spec.js'
  ],
  framework: 'mocha',
  mochaOpts: {
    timeout: 5000,
    slow: 3000
  },
  capabilities: {
    'browserName': 'firefox'
  },
  params: {   // default values
    protocol: 'http',
    server: 'localhost',
    port: 8020
  },
  onPrepare: function () {
    global.serverUrl = browser.params.protocol + '://' + browser.params.server + ':' + browser.params.port;
    // Protractor can be used on non-angular sites with this function
    global.isAngularSite = function (flag){
      if (typeof flag === 'undefined') {
        flag = true;
      }
      browser.ignoreSynchronization = !flag;
    };

    // clear old data and insert test data
    exec('./bin/insert_test_data.sh', function(err, stdout, stderr) {});

    // login
    browser.driver.get(serverUrl + '/login');
    browser.driver.findElement(by.css('input[name="email"]')).sendKeys('admin@vuolearning.fi');
    browser.driver.findElement(by.css('input[name="password"]')).sendKeys('asd');
    browser.driver.findElement(by.css('[type="submit"]')).click();
    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return new RegExp(browser.params.server + ':' + browser.params.port).test(url);
      });
    }, 1000);
  }
};
