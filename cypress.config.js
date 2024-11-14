const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')  
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild"); 

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Orange HRM Test results',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {

    projectId: "3jn4z5",
    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    "video": true,
    //"videosFolder": "cypress/recordedvideos",
    defaultCommandTimeout: 20000, 
    pageLoadTimeout: 120000,
    // "viewportWidth": 375,
     //"viewportHeight": 667,
    retries: {openMode:2, runMode: 1},
    //videoCompression: 51,
    //specPattern : "cypress/e2e/**/*.dbsqa.js",
    //specPattern: "**/*.feature",
    env:{

          "username" : "Admin",
          "password" : "admin123",
          "cookievalue" : "orangehrm=t8nk9ker5anmvuaomri6nsq8ob",
          "sample" : ""
    },
    "watchForFileChanges": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        }));
        preprocessor.addCucumberPreprocessorPlugin(on, config);
        return config;
    },
  },
});
