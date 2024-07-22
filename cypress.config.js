const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4nu6mn",
  e2e: {
    baseUrl: "https://conduit.realworld.how/",
  },
});
