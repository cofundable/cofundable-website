module.exports = config => {
  config.addPassthroughCopy('./src/assets/');
  config.addPassthroughCopy('./src/js/');
  return {
    markdownTemplateEngine: 'pug',
    dataTemplateEngine: 'pug',
    htmlTemplateEngine: 'pug',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
