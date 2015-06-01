'use strict';

var _     = require('lodash'),
    path  = require('path'),
    chalk = require('chalk'),
    yosay = require('yosay');

module.exports = {
  /**
   * Prompt the user for any missing project info
   */
  forProjectInfo: function() {
    var me = this;
    var done = this.async();
    this.prompt(
      [
        {
          name: 'name',
          type: 'input',
          message: 'Project name:',
          default: _.kebabCase(path.basename(this.destinationRoot())),
          when: function() { return !me.project.name; },
          validate: function(projectName) {
            return projectName === _.kebabCase(projectName) ? true :
                   'That\'s not a valid NPM project name (ex: my-project-name)';
          }
        },
        {
          name: 'description',
          type: 'input',
          message: 'Description:',
          when: function() { return !me.project.description; }
        },
        {
          name: 'authorName',
          type: 'input',
          message: 'Author:',
          default: this.user.git.name(),
          when: function() { return !me.project.author; }
        }
      ],

      function(answers) {
        me.project.name = me.project.name || answers.name;
        me.project.description = me.project.description || answers.description || 'TODO: Add a project description';

        // The project's full name includes the npm scope (if any)
        me.project.fullName = me.project.name;

        if (_.contains(me.project.name, '/')) {
          // Remove NPM scope from the project name
          me.project.name = me.project.name.substring(me.project.name.indexOf('/') + 1);
        }

        // Format the project name for humans and for code
        me.project.friendlyName = _.startCase(me.project.name);
        me.project.camelCaseName = _.camelCase(me.project.name);

        // Get the project's author
        me.project.author = me.project.author || {};
        if (_.isString(me.project.author)) {
          me.project.author = {name: me.project.author};
        }
        me.project.author.name = me.project.author.name || answers.authorName || 'John Doe';

        done();
      });
  },

  /**
   * Prompt for the user's GitHub username
   */
  forGitHubUsername: function() {
    var me = this;
    var done = this.async();
    this.user.github.username(function(err, username) {
      me.prompt(
        [
          {
            name: 'githubUsername',
            type: 'input',
            message: 'Your GitHub username:',
            default: me.options.githubUsername || username,
            when: function() { return !me.project.repository; }
          }
        ],

        function(answers) {
          me.options.githubUsername = me.options.githubUsername || answers.githubUsername || 'UserName';
          me.config.set(me.options);
          done();
        });
    });
  },

  /**
   * Prompt the user for options
   */
  forOptions: function() {
    var me = this;
    var done = this.async();
    this.prompt(
      [
        {
          name: 'env',
          type: 'checkbox',
          message: 'Where will this project run?:',
          when: _.isUndefined(this.options.env.node),
          choices: [
            {name: 'Node.js', value: 'node', checked: true},
            {name: 'Web browsers', value: 'browser'}
          ]
        },
        {
          name: 'tests',
          type: 'confirm',
          message: 'Unit tests?:',
          default: true,
          when: _.isUndefined(this.options.tests)
        }
      ],

      function(answers) {
        me.options.isYeomanGenerator = _.isUndefined(me.options.isYeomanGenerator) ? _.startsWith(me.project.name, 'generator-') : me.options.isYeomanGenerator;
        me.options.tests = me.options.tests || !!answers.tests;
        me.options.env.node = me.options.env.node || _.contains(answers.env, 'node');
        me.options.env.browser = me.options.env.browser || _.contains(answers.env, 'browser');
        me.config.set(me.options);
        done();
      });
  },

  /**
   * A polite goodbye.
   */
  sayGoodbye: function() {
    this.log(yosay(
      'All done.  Go ahead and give ' + chalk.magenta('npm run build') +
      ' a try.  And then maybe ' + chalk.magenta('npm test'),
      {maxLength: 30}));
    this.log();
  }
};

