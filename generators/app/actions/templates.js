/* jshint -W040 */
'use strict';

var _      = require('lodash'),
    fs     = require('fs'),
    rimraf = require('rimraf');

module.exports = {
  /**
   * Copies template files to the project, unless they already exist
   */
  create: function() {
    createTemplate.call(this, '_gitignore', '.gitignore');
    createTemplate.call(this, '.jshintignore');
    createTemplate.call(this, '_npmignore', '.npmignore');
    createTemplate.call(this, 'LICENSE');
    createTemplate.call(this, 'README.md');

    if (this.options.env.yeoman) {
      createTemplate.call(this, 'lib/index.js', 'generators/app/index.js');
    }
    else if (!this.options.env.cordova) {
      createTemplate.call(this, 'lib/index.js');
    }

    if (this.options.tests) {
      if (!fs.existsSync(this.destinationPath('tests'))) {
        // Don't re-create this file if it has been deleted
        createTemplate.call(this, 'tests/index.spec.js');
      }

      if (!this.options.env.cordova) {
        createTemplate.call(this, '.codeclimate.yml');
      }

      if (this.options.env.browser) {
        createTemplate.call(this, 'karma.conf.js');
        createTemplate.call(this, 'tests/index.html');
        createTemplate.call(this, 'tests/_config.js');
      }
    }

    if (this.options.env.browser && !this.options.env.cordova) {
      createTemplate.call(this, '.bowerrc');
      createTemplate.call(this, '.nojekyll');
      createTemplate.call(this, 'index.html');
      createTemplate.call(this, 'dist/project-name.js', 'dist/' + this.project.name + '.js');
    }
  },

  /**
   * Copies template files to the project, overwriting any existing files
   */
  overwrite: function() {
    overwriteTemplate.call(this, '_gitattributes', '.gitattributes');
    overwriteTemplate.call(this, '.editorconfig');

    if (this.options.tests) {
      if (!this.options.env.cordova) {
        overwriteTemplate.call(this, '.travis.yml');
      }
    }
  },

  /**
   * Copies JSON template files, merging them with existing files if needed
   */
  json: function() {
    mergeJSONTemplate.call(this, '.jshintrc', 'globals');
    mergeJSONTemplate.call(this, '.jscsrc', 'excludeFiles');
    mergeJSONTemplate.call(this, 'package.json');

    if (this.options.env.browser) {
      mergeJSONTemplate.call(this, 'bower.json');
    }
  },

  /**
   * Deletes the .tmp directory that's created by some templates
   */
  cleanup: function() {
    rimraf.sync(this.destinationPath('.tmp'));
  }
};

/**
 * Copies the given template file to the project, unless it already exists.
 *
 * @param {string} filename - The template file name
 * @param {string} [destFilename] - The destination filename. Defaults to the same as `filename`.
 */
function createTemplate(filename, destFilename) {
  var src = this.templatePath(filename);
  var dest = this.destinationPath(destFilename || filename);
  if (!this.fs.exists(dest)) {
    this.fs.copyTpl(src, dest, this);
  }
}

/**
 * Copies the given template file to the project.
 * If the file already exists in the project, then it is overwritten.
 *
 * @param {string} filename - The template file name
 * @param {string} [destFilename] - The destination filename. Defaults to the same as `filename`.
 */
function overwriteTemplate(filename, destFilename) {
  var src = this.templatePath(filename);
  var dest = this.destinationPath(destFilename || filename);
  this.fs.copyTpl(src, dest, this);
}

/**
 * Copies the given JSON template file to the project.
 * If the file already exists in the project, then the template is merged
 * with the existing file.
 *
 * @param {string} filename - The template file name
 * @param {string} [keep] - If specified, then only this key will be kept. Everything else is overwritten.
 */
function mergeJSONTemplate(filename, keep) {
  var src = this.templatePath(filename);
  var dest = this.destinationPath(filename);
  var tmp = this.destinationPath('.tmp', filename);
  this.options.keep = this.options.keep || {};

  if (this.fs.exists(dest)) {
    if (keep) {
      // Overwrite the existing JSON file, except for one key
      var json = this.fs.read(dest);
      var keepPattern = new RegExp('"' + keep + '"\\s*:([^\\}\\]]+[\\}\\]])', 'm');
      var keepMatches = json.match(keepPattern);
      this.options.keep[keep] = keepMatches ? keepMatches[1] : null;
      this.fs.copyTpl(src, dest, this);
    }
    else {
      // Merge the template with the existing JSON file.
      this.fs.copyTpl(src, tmp, this);
      var merged = _.merge(this.fs.readJSON(tmp), this.fs.readJSON(dest));
      this.fs.writeJSON(dest, merged);
    }
  }
  else {
    this.fs.copyTpl(src, dest, this);
  }
}
