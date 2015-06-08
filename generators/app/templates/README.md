<%= project.friendlyName %>
============================
#### <%= project.description %>

<% if (options.tests) { -%>
[![Build Status](https://img.shields.io/travis/<%= options.githubUsername %>/<%= project.name %>.svg)](https://travis-ci.org/<%= options.githubUsername %>/<%= project.name %>)
[![Coverage Status](https://img.shields.io/coveralls/<%= options.githubUsername %>/<%= project.name %>.svg)](https://coveralls.io/r/<%= options.githubUsername %>/<%= project.name %>)
<% } -%>
[![Code Climate Score](https://img.shields.io/codeclimate/github/<%= options.githubUsername %>/<%= project.name %>.svg)](https://codeclimate.com/github/<%= options.githubUsername %>/<%= project.name %>)
[![Dependencies](https://img.shields.io/david/<%= options.githubUsername %>/<%= project.name %>.svg)](https://david-dm.org/<%= options.githubUsername %>/<%= project.name %>)
[![Inline docs](http://inch-ci.org/github/<%= options.githubUsername %>/<%= project.name %>.svg?branch=master&style=shields)](http://inch-ci.org/github/<%= options.githubUsername %>/<%= project.name %>)
[![Downloads](https://img.shields.io/npm/dm/<%= project.name %>.svg)](https://www.npmjs.com/package/<%= project.name %>)

[![npm](http://img.shields.io/npm/v/<%= project.name %>.svg)](https://www.npmjs.com/package/<%= project.name %>)
<% if (options.env.browser) { -%>
[![Bower](http://img.shields.io/bower/v/<%= project.name %>.svg)](#bower)
<% } -%>
[![License](https://img.shields.io/npm/l/<%= project.name %>.svg)](LICENSE)


Features
--------------------------
* Walks your dog
* Finds your lost car keys
* Calls your mom for you


<% if (options.env.node && options.env.browser) { -%>
Installation
--------------------------
#### Node
Install using [npm](https://docs.npmjs.com/getting-started/what-is-npm):

```bash
npm install <%= project.fullName %>
```

#### Web Browsers
Install using [bower](http://bower.io/):

```bash
bower install <%= project.name %>
```


Sample Usage
--------------------------

```javascript
// TODO: Add a code sample
```
<% } else if (options.env.node) { -%>
Installation and Use
--------------------------
Install using [npm](https://docs.npmjs.com/getting-started/what-is-npm):

```bash
npm install <%= project.fullName %>
```

Then use it in your [Node.js](http://nodejs.org/) script like this:

```javascript
// TODO: Add a code sample
var <%= project.camelCaseName %> = require('<%= project.name %>');
```
<% } else if (options.env.browser) { -%>
Installation and Use
--------------------------
Install using [bower](http://bower.io/):

```bash
bower install <%= project.name %>
```

Then use it on your page like this:

```html
<script src="bower_components/<%= project.name %>/dist/<%= project.name %>.js"></script>
<script>
  // TODO: Add a code sample
  window.<%= project.camelCaseName %>;
</script>
```
<% } -%>


Contributing
--------------------------
I welcome any contributions, enhancements, and bug-fixes.  [File an issue](https://github.com/<%= options.githubUsername %>/<%= project.name %>/issues) on GitHub and [submit a pull request](https://github.com/<%= options.githubUsername %>/<%= project.name %>/pulls).

#### Building<%= options.tests ? '/Testing' : '' %>
To build<%= options.tests ? '/test' : '' %> the project locally on your computer:

1. __Clone this repo__<br>
`git clone https://github.com/<%= options.githubUsername %>/<%= project.name %>.git`

2. __Install dependencies__<br>
`npm install`

3. __Run the build script__<br>
`npm run build`

<% if (options.tests) { -%>
4. __Run the unit tests__<br>
<% if (options.env.node && options.env.browser) { -%>
`npm run mocha` (test in Node)<br>
`npm run karma` (test in web browsers + code coverage)<br>
`npm test` (test in Node and browsers + code coverage)
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
