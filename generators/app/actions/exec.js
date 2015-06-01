'use strict';

var _ = require('lodash');

module.exports = {
  /**
   * Installs npm-check-updates, which is the only prerequisite needed to run {@link updateDependencies}.
   */
  installDependencies: function() {
    this.spawnCommandSync('npm', ['install', 'npm-check-updates']);
  },

  /**
   * Updates dependencies to their latest versions
   */
  updateDependencies: function() {
    this.spawnCommandSync('npm', ['run', 'update-deps']);
  }
};

