basePath = '../';

// Karma configuration
// modified by a human based on angular-seed config Generated on Thu Jul 26 2012 14:35:23 GMT-0700 (PDT)

// base path, that will be used to resolve files and exclude

// list of files / patterns to load in the browser
files = [ ANGULAR_SCENARIO,
          ANGULAR_SCENARIO_ADAPTER, REQUIRE, REQUIRE_ADAPTER,
    'test/e2e/main.js',

    // all the sources, tests
    {
      pattern : 'test/e2e/*.js',
      included : false
    } ];

// test results reporter to use
// possible values: dots || progress
reporter = [ 'progress' ];

// web server port
port = 9876;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO ||
// LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file
// changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = [ 'ChromeCanary' ];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

proxies = {
  '/' : 'http://localhost:8000/'
};

junitReporter = {
  outputFile : 'test_out/e2e.xml',
  suite : 'e2e'
};
