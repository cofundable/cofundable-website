module.exports = (config) => {
  config.addPassthroughCopy("./src/assets/");
  config.addPassthroughCopy("./src/js/");
  config.addShortcode("year", () => `${new Date().getFullYear()}`);
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
