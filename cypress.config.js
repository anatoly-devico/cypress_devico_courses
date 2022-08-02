const axios = require("axios");

const {defineConfig} = require("cypress");

module.exports = defineConfig({
  env: {
    apiUrl: "http://localhost:3001",
    coverage: false,
    codeCoverage: {
      url: "http://localhost:3001/__coverage__",
      exclude: "cypress/**/*.*",
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    watchForFileChanges: true,
    numTestsKeptInMemory: 50,
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    retries: {
      runMode: 2,
      openMode: 1,
    },
    viewportHeight: 1000,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      const testDataApiEndpoint = `${config.env.apiUrl}/testData`;

      const queryDatabase = ({entity, query}, callback) => {
        const fetchData = async (attrs) => {
          const {data} = await axios.get(`${testDataApiEndpoint}/${entity}`);
          return callback(data, attrs);
        };

        return Array.isArray(query) ? Promise.map(query, fetchData) : fetchData(query);
      };

      on("task", {
        async "db:seed"() {
          // seed database with test data
          const {data} = await axios.post(`${testDataApiEndpoint}/seed`);
          return data;
        },

        // fetch test data from a database (MySQL, PostgreSQL, etc...)
        "filter:database"(queryPayload) {
          return queryDatabase(queryPayload, (data, attrs) => _.filter(data.results, attrs));
        },
        "find:database"(queryPayload) {
          return queryDatabase(queryPayload, (data, attrs) => _.find(data.results, attrs));
        },
      });
      return config;
    },

  },
});
