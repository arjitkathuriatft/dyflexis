const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    experimentalStudio: true,
    baseUrl: 'https://academybugs.com',
    env : {
      URL : 'https://academybugs.com'
    },
  },
  


});
