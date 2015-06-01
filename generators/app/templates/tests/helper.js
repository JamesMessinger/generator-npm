'use strict';

if (typeof(window) === 'object') {
  // We're running in a web browser
  window.isBrowser = true;
  window.isNode = false;
}
else {
  // We're running in Node
  global.isBrowser = false;
  global.isNode = true;

  // Export node modules as globals
  global.<%= project.camelCaseName %> = require('../');
  global.expect = require('chai').expect;
  global.sinon = require('sinon');
}
