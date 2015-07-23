'use strict';

var isNode = typeof(window) === 'undefined';

var helper = {
  isNode: isNode,
  isBrowser: !isNode
};

if (helper.isNode) {
  module.exports = helper;
}
else if (helper.isBrowser) {
  window.helper = helper;

  // Fake `require()` for browsers
  window.require = function(name) {
    name = name.substr(name.lastIndexOf('/') + 1);
    return name ? window[name] : window.<%= project.camelCaseName %>;
  }
}

/**
 * Set global settings for all tests
 */
beforeEach(function() {
  this.currentTest.timeout(2000);
  this.currentTest.slow(100);
});
