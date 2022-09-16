const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://conexaoqa.herokuapp.com/',
    viewportWidth: 1366,
    viewportHeight: 768


  },

});
