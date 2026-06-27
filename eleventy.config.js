module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("pdf");

  // Sammlung für deinen Retro-Feed
  eleventyConfig.addCollection("feed", function(collectionApi) {
    return collectionApi.getFilteredByGlob("feed/*.md");
  });

    return {
        // ZWINGT ELEVENTY, MARKDOWN ALS ECHTES MARKDOWN ZU VERARBEITEN:
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};