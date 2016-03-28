/**
 * protractor test/ui/conf.js
 *
 * Example with command line parameters:
 * protractor --params.protocol=http --params.server=localhost --params.port=8020 test/ui/conf.js
 */

exports.config = {
  specs: [
    'noAngular.js',
    './../../public/angular/*.spec.js'
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
  }
};
