#!/usr/bin/env node
'use strict';

var program = require('commander'),
    chalk   = require('chalk'),
    api     = require('../');

program.command('say-hello')
  .description('Says "hello, world!"')
  .option('-s, --silent', 'suppress the "hello, world" message')
  .action(function(options) {
    try {
      var msg = api.sayHello();
      if (!options.silent) {
        console.log(msg);
      }
    }
    catch (e) {
      errorHandler(e);
    }
  });

program
  .version(require('../package').version)
  .description('<%- project.description %>')
  .parse(process.argv);

// Show help if no options were given
if (program.rawArgs.length < 3) {
  program.help();
}

/**
 * Writes error information to stderr and exits with a non-zero code
 *
 * @param {Error} err
 */
function errorHandler(err) {
  console.error(chalk.red(err.stack));
  process.exit(1);
}
