const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },

    env: {
      baseUrl: 'http://provaqa.prc.rpe.tech:9080/desafioqa',
      apiBaseUrl: 'https://horizon-api-sb.app.rpe.tech',
      hideCredentials: true,
      requestMode: true

    },
    experimentalRunAllSpecs: true,

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
  },
  fixturesFolder: false,
  video: false,
});
