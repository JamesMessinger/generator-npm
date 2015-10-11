<% if (options.env.node) { -%>
/**
 * This script exposes everything as globals, to allow tests to run in Node and in browsers.
 * 
 * Why not use Browserify instead of globals?
 *  - To make sure <%= project.friendlyName %> works properly when Node and CommonJS are not available
 *  - Some of our devDependencies have separate packages packages for Node vs. Browser (e.g. Mocha, Sinon)
 *  - This reduces redundant boilerplate code in the .spec files
 */
<% } -%>
(function() {
  'use strict';

<% if (options.env.node) { -%>
  if (typeof(window) === 'object') {
<% } -%>
    // Expose Browser globals
<% if (options.env.node) { -%>
    window.global = window;
<% } -%>
    window.expect = chai.expect;
<% if (options.env.node) { -%>
    window.userAgent = {
      isNode: false,
      isBrowser: true,
      isKarma: !!window.__karma__
    };
  }
  else {
    // Expose Node globals
    global.<%= project.camelCaseName %> = require('../../');
    global.expect = require('chai').expect;
    global.sinon = require('sinon');

    global.userAgent = {
      isNode: true,
      isBrowser: false,
      isTravisCI: !!process.env.TRAVIS
    };
  }
<% } -%>

})();
