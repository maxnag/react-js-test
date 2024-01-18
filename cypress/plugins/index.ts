/// <reference types="cypress" />

let fileSystem = require('fs');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on: any, config: any) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // remove all successful videos
  on('after:spec', (spec: any, results: any) => {
    if (results && results.video) {
      const failures = results.tests.some((test: any) => test.attempts.some((attempt: any) => attempt.state === 'failed'));

      if (!failures && fileSystem.existsSync(results.video)) {
        return fileSystem.unlinkSync(results.video);
      }
    }
  });
};
