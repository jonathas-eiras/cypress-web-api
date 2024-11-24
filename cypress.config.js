const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    env: {
      baseUrl: 'http://provaqa.prc.rpe.tech:9080/desafioqa',
      apiBaseUrl: 'https://horizon-api-sb.app.rpe.tech',
      hideCredentials: true,
      requestMode: true

    },
    experimentalRunAllSpecs: true
  },
  fixturesFolder: false,
  video: false,
});
