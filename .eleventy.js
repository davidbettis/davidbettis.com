const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  eleventyConfig.addFilter("excerpt", (content) => {
    if (!content) return "";
    const match = content.match(/<p>(.*?)<\/p>/s);
    return match ? match[1] : "";
  });

  const markdownLib = markdownIt({
    html: true, // Enable HTML tags in source
    breaks: true,
    linkify: true
  }).use(markdownItAttrs); // Use the attributes plugin

  eleventyConfig.setLibrary('md', markdownLib);
  eleventyConfig.addPassthroughCopy("./src/assets/css");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/images");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
