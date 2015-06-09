'use strict';

// Karma config
// https://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function(config) {
  var isMac      = /^darwin/.test(process.platform),
      isWindows  = /^win/.test(process.platform),
      isLinux    = !(isMac || isWindows),
      isTravisCI = process.env.TRAVIS === 'true';

  config.set({
    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: ['mocha', 'coverage'],

    files: [
      // <%= project.name %>
      'dist/<%= project.name %>.cover.js',

      // Unit tests
      'tests/helper.js',
      'tests/**/*.spec.js'
    ],

    browsers: (function() {
      // Test on all browsers that are available for the environment
      if (isMac) {
        return ['PhantomJS', 'Firefox', 'Chrome', 'Safari'];
      }
      else if (isWindows) {
        return ['PhantomJS', 'Firefox', 'Chrome', 'Safari', 'IE'];
      }
      else if (isTravisCI) {
        return ['PhantomJS', 'Firefox'];
      }
      else if (isLinux) {
        return ['PhantomJS', 'Firefox', 'Chrome'];
      }
    })(),

    coverageReporter: {
      reporters: [
        {type: 'lcov', subdir: '<%= options.env.node ? 'karma' : '.' %>'},
        {type: 'text-summary', subdir: '<%= options.env.node ? 'karma' : '.' %>'}
      ]
    }
  });
};
