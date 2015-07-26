'use strict';
var isBrowser = typeof(window) === 'object';

var helper = {
  isNode: !isBrowser,
  isBrowser: isBrowser,
  isSafari: isBrowser && /Safari/.test(navigator.userAgent),
  isFirefox: isBrowser && /Firefox/.test(navigator.userAgent),
  isIE: isBrowser && /Trident/.test(navigator.userAgent),
  isChrome: !isBrowser || /Chrome/.test(navigator.userAgent)  // isChrome === true for Node
};

if (helper.isNode) {
  // We're running in Node, so just export the helper object
  module.exports = helper;
}
else if (helper.isBrowser) {
  // We're running in a browser, so mimic the Node environment
  window.global = window;
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
