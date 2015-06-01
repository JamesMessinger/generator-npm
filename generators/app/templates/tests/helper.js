'use strict';

if (typeof(window) === 'object') {
  // We're running in a web browser
  window.isBrowser = true;
  window.isNode = false;

  // Create globals for test frameworks
  // NOTE: <%= project.camelCaseName %>, chai, and sinon are already global
  window.expect = chai.expect;
}
else {
  // We're running in Node
  global.isBrowser = false;
  global.isNode = true;

  // Create globals for test frameworks
  global.<%= project.camelCaseName %> = require('../');
  global.expect = require('chai').expect;
  global.sinon = require('sinon');
}
