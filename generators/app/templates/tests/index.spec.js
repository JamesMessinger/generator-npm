'use strict';

<% if (options.env.node && !options.env.browser) { -%>
var <%= project.camelCaseName %> = require('../'),
    expect = require('chai').expect,
    sinon  = require('sinon');

<% } -%>
describe('<%= project.name %>', function() {
  it('should export the `sayHello` function', function() {
    expect(<%= project.camelCaseName %>.sayHello).to.be.a('function');
  });

  it('should return "hello, world!"', function() {
    expect(<%= project.camelCaseName %>.sayHello()).to.equal('hello, world!');
  });

  it('should return a mock response', function() {
    sinon.stub(<%= project.camelCaseName %>, 'sayHello').returns('hi there');
    expect(<%= project.camelCaseName %>.sayHello()).to.equal('hi there');
    <%= project.camelCaseName %>.sayHello.restore();
  });
});
