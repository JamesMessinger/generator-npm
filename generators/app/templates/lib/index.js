<% if (options.env.browser) { -%>
/** !
 * <%= project.friendlyName %> v0.0.1
 *
 * @link https://github.com/<%= options.githubUsername.toLowerCase() %>/<%= project.name %>
 * @license MIT
 */
<% } -%>
'use strict';

module.exports.sayHello = function() {
  return 'hello, world!';
};

