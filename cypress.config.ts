import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'cypress';

const { combinedEnv } = loadEnvConfig(process.cwd());

export default defineConfig({
  env: combinedEnv,
  chromeWebSecurity: false,
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  defaultCommandTimeout: 1000,
  downloadsFolder: 'cypress/downloads',
  experimentalInteractiveRunEvents: true,
  experimentalStudio: false,
  fixturesFolder: 'cypress/fixture',
  retries: {
    runMode: 3,
  },
  screenshotOnRunFailure: true,
  screenshotsFolder: 'coverage/cypress/assets/screenshots',
  supportFolder: 'cypress/support',
  scrollBehavior: 'bottom',
  trashAssetsBeforeRuns: true,
  video: true,
  videoCompression: 10,
  videosFolder: 'coverage/cypress/assets/videos',
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'coverage/cypress/results',
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on: any, config: any) {
      return require('cypress/plugins/index.ts')(on, config);
    },
    baseUrl: combinedEnv.APP_URL,
    experimentalRunAllSpecs: true,
    specPattern: [
      // client part
      'cypress/e2e/home.cy.tsx',
    ],
    supportFile: 'cypress/support/index.ts',
  },
});
