'use strict';

module.exports = function(config) {
  var isMac      = /^darwin/.test(process.platform),
      isWindows  = /^win/.test(process.platform),
      isLinux    = !(isMac || isWindows),
      isTravisCI = process.env.TRAVIS === 'true';

  config.set({
    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: ['mocha'],

    files: [
      // <%= project.name %>
      'dist/<%= project.name %>.min.js',

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
    })()
  });
};
