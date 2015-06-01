![Yeoman logo](http://yeoman.io/assets/img/tool-yo.3dcc.png)

[![Dependencies](https://img.shields.io/david/BigstickCarpet/generator-npm.svg)](https://david-dm.org/BigstickCarpet/generator-npm)
[![npm](http://img.shields.io/npm/v/@bigstickcarpet/generator-npm.svg)](https://www.npmjs.com/package/@bigstickcarpet/generator-npm)
[![License](https://img.shields.io/npm/l/@bigstickcarpet/generator-npm.svg)](LICENSE)

> This is my [Yeoman](http://yeoman.io/) generator for scaffolding npm projects. It's pretty tailored to my personal tastes, but feel free to use it if you want. Maybe our tastes are similar.


Features
------------------------
* Prompts you for all info and options.  No need to remember a bunch of command line arguments.
* Generates "ignore" files &ndash; `.gitignore`, `.npmignore`, `.jshintignore`
* Enforces code styling via `.jshintrc`, `.jscsrc`, `.editorconfig`
* Keeps your dependencies up-to-date via [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
* Adds npm scripts for building, testing, deploying, and updating dependencies.
* Unit testing with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/), plus code coverage via [Istanbul](https://www.npmjs.com/package/istanbul)
* Web browser support via [Browserify](http://browserify.org/), [Bower](http://bower.io/), and [Karma](http://karma-runner.github.io/0.12/index.html)


Installation
------------------------
Install the generator using [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```bash
npm install -g @bigstickcarpet/generator-npm
```

__NOTE__: Yeoman generators _must_ be installed globally (using the __-g__ flag).  If you get any permissions errors, you can fix them by [granting yourself access to the npm directories](https://docs.npmjs.com/getting-started/fixing-npm-permissions).  Using __sudo__ or an administrator account as a workaround is __not__ recommended.


Getting Started
------------------------
To scaffold an npm project, just run the following command.

```bash
yo @bigstickcarpet/npm
```

Depending on where you run this command, it will behave slightly differently:

- When run in an __existing npm project__ directory, it will update and/or repair any missing/corrupted files in the project.

- When run in __any other__ directory, it will create a brand new npm project.  You will be prompted for the project name and other information.
