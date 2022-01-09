module.exports = (config) => {
  config.addPassthroughCopy("./src/assets/");
  config.addPassthroughCopy("./src/js/");
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
