<% if (options.env.browser) { -%>
(function() {
  'use strict';

<%    if (options.env.node) { -%>
  if (typeof(mocha) === 'object') {
<%    } -%>
    // Configure Mocha
    mocha.setup('bdd');
    mocha.fullTrace();
    mocha.checkLeaks();
    mocha.globals([]);
<%    if (options.env.node) { -%>
  }

<%    } -%>
<% } -%>
  // Set global settings for all tests
  beforeEach(function() {
    this.currentTest.timeout(2000);
    this.currentTest.slow(100);
  });
<% if (options.env.browser) { -%>

})();
<% } -%>
