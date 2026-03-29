module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Custom filter for checking if a string starts with a prefix
  eleventyConfig.addFilter("startswith", function(str, prefix) {
    return typeof str === "string" && str.startsWith(prefix);
  });

  // Watch CSS and JS for changes in dev mode
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");

  return {
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      data: "_data"
    }
  };
};
