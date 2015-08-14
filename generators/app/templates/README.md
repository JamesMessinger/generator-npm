<%= project.friendlyName %>
============================
#### <%= project.description %>

<% if (options.tests) { -%>
[![Build Status](https://api.travis-ci.org/<%= options.githubUsername %>/<%= project.name %>.svg)](https://travis-ci.org/<%= options.githubUsername %>/<%= project.name %>)
<% } -%>
[![Dependencies](https://david-dm.org/<%= options.githubUsername %>/<%= project.name %>.svg)](https://david-dm.org/<%= options.githubUsername %>/<%= project.name %>)
<% if (options.tests) { -%>
[![Coverage Status](https://coveralls.io/repos/<%= options.githubUsername %>/<%= project.name %>/badge.svg?branch=master&service=github)](https://coveralls.io/r/<%= options.githubUsername %>/<%= project.name %>)
<% } -%>
[![Code Climate Score](https://codeclimate.com/github/<%= options.githubUsername %>/<%= project.name %>/badges/gpa.svg)](https://codeclimate.com/github/<%= options.githubUsername %>/<%= project.name %>)
[![Codacy Score](https://www.codacy.com/project/badge/XXXXXXXXXXXXXXXXXXXXXXXXXXXX)](https://www.codacy.com/public/jamesmessinger/<%= project.name %>)
[![Inline docs](http://inch-ci.org/github/<%= options.githubUsername %>/<%= project.name %>.svg?branch=master&style=shields)](http://inch-ci.org/github/<%= options.githubUsername %>/<%= project.name %>)

[![npm](http://img.shields.io/npm/v/<%= project.name %>.svg)](https://www.npmjs.com/package/<%= project.name %>)
<% if (options.env.browser) { -%>
[![Bower](http://img.shields.io/bower/v/<%= project.name %>.svg)](#bower)
<% } -%>
[![License](https://img.shields.io/npm/l/<%= project.name %>.svg)](LICENSE)

<% if (options.env.browser && options.tests) { -%>
[![Browser Compatibility](https://saucelabs.com/browser-matrix/<%= project.name %>.svg)](https://saucelabs.com/u/<%= project.name %>)
<% } -%>


Features
--------------------------
<% if (options.env.browser && options.env.node && options.tests) { -%>
* [Tested](http://<%= options.githubUsername.toLowerCase() %>.github.io/<%= project.name %>/tests/index.html) in Node, IO.js, and all modern web browsers on Mac, Windows, Linux, iOS, and Android
<% } %>
* Walks your dog
* Finds your lost car keys
* Calls your mom for you


Example
--------------------------

```javascript
// TODO: Add a code sample
```


<% if (options.env.node && options.env.browser) { -%>
Installation
--------------------------
#### Node
Install using [npm](https://docs.npmjs.com/getting-started/what-is-npm):

```bash
npm install <%= project.fullName %>
```

Then require it in your code:

```javascript
var <%= project.camelCaseName %> = require('<%= project.name %>');
```

#### Web Browsers
Install using [bower](http://bower.io/):

```bash
bower install <%= project.name %>
```

Then reference [`<%= project.name %>.js`](dist/<%= project.name %>.js) or [`<%= project.name %>.min.js`](dist/<%= project.name %>.min.js) in your HTML:

```html
<script src="bower_components/<%= project.name %>/dist/<%= project.name %>.js"></script>
```

Or, if you're using AMD (Require.js), then import it into your module:

```javascript
define(["<%= project.name %>"], function(<%= project.camelCaseName %>) { /* your module's code */ })
```
<% } else if (options.env.node) { -%>
Installation
--------------------------
Install using [npm](https://docs.npmjs.com/getting-started/what-is-npm):

```bash
npm install <%= project.fullName %>
```
<% } else if (options.env.browser) { -%>
Installation and Use
--------------------------
Install using [bower](http://bower.io/):

```bash
bower install <%= project.name %>
```

Then reference [`<%= project.name %>.js`](dist/<%= project.name %>.js) or [`<%= project.name %>.min.js`](dist/<%= project.name %>.min.js) in your HTML:

```html
<script src="bower_components/<%= project.name %>/dist/<%= project.name %>.js"></script>
<script>
  // TODO: Add a code sample
  window.<%= project.camelCaseName %>;
</script>
```

Or, if you're using AMD (Require.js), then import it into your module:

```javascript
define(["<%= project.name %>"], function(<%= project.camelCaseName %>) { /* your module's code */ })
```
<% } -%>


Contributing
--------------------------
I welcome any contributions, enhancements, and bug-fixes.  [File an issue](https://github.com/<%= options.githubUsername %>/<%= project.name %>/issues) on GitHub and [submit a pull request](https://github.com/<%= options.githubUsername %>/<%= project.name %>/pulls).

#### Building<%= options.tests ? '/Testing' : '' %>
To build<%= options.tests ? '/test' : '' %> the project locally on your computer:

1. __Clone this repo__<br>
`git clone https://github.com/<%= options.githubUsername.toLowerCase() %>/<%= project.name %>.git`

2. __Install dependencies__<br>
`npm install`

3. __Run the build script__<br>
`npm run build`

<% if (options.tests) { -%>
4. __Run the unit tests__<br>
<% if (options.env.node && options.env.browser) { -%>
`npm run mocha` (test in Node)<br>
`npm run karma` (test in web browsers)<br>
`npm test` (test in Node and browsers, and report code coverage)
<% } else if (options.env.node) { -%>
`npm run mocha` (just the tests)<br>
`npm test` (tests + code coverage)
<% } else if (options.env.browser) { -%>
`npm test`
<% } -%>
<% } -%>


License
--------------------------
<%= project.friendlyName %> is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.
