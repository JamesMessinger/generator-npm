// Mocha configuration
<% if (options.env.browser) { -%>
(function() {
  'use strict';

<%    if (options.env.node) { -%>
  if (userAgent.isBrowser) {
<%    } -%>
    // Configure Mocha
    mocha.setup('bdd');
    mocha.fullTrace();
    mocha.asyncOnly();
    mocha.checkLeaks();
    mocha.globals([]);

    // Output each test's name, for debugging purposes
    beforeEach(function() {
      console.log('START ' + this.currentTest.parent.title + ' - ' + this.currentTest.title);
    });
    afterEach(function() {
      console.log('DONE  ' + this.currentTest.parent.title + ' - ' + this.currentTest.title);
    });
<%    if (options.env.node) { -%>
  }

<%    } -%>
<% } -%>
  beforeEach(function() {
    // Set the default timeouts for all tests
    this.currentTest.timeout(2000);
    this.currentTest.slow(100);
  });
<% if (options.env.browser) { -%>

})();
<% } -%>
