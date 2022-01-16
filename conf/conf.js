// An example configuration file.
var HtmlScreenshotReporter = require('C:\\Users\\Jegadesh Nakkiran\\AppData\\Roaming\\npm\\node_modules\\protractor-jasmine2-html-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['E:\\UST-SDET-Traning\\protractor\\test\\example_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  // Setup the report before any tests start
  onPrepare: function () {
    browser.driver.manage().window().setSize(1200, 800);

    var reporter  = new Jasmine2HtmlReporter ({
        dest:  'target/screenshots',
        filename: 'my-report.html'
    });
    jasmine.getEnv().addReporter(reporter);
},

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
   
    
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }

};
