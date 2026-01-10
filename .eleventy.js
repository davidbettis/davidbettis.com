const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function(eleventyConfig) {
  const markdownLib = markdownIt({
    html: true, // Enable HTML tags in source
    breaks: true,
    linkify: true
  }).use(markdownItAttrs); // Use the attributes plugin

  eleventyConfig.setLibrary('md', markdownLib);
  eleventyConfig.addPassthroughCopy("./src/assets/css");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
