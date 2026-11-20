// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    // CLI 11 clones requests with object spread. Recent Node versions inherit
    // headers, so expose them as an own property before that clone is made.
    beforeMiddleware: ['node-request-compat'],
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      {
        'middleware:node-request-compat': ['factory', function () {
          return function (req, res, next) {
            Object.defineProperty(req, 'headers', {
              value: req.headers, enumerable: true, writable: true, configurable: true
            });
            next();
          };
        }]
      },
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/my-portfolio'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
