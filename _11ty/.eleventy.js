const pluginLocalRespimg = require('eleventy-plugin-local-respimg');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const ogPlugin = require("./lib/og-plugin");
const path = require('path');

module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({ '_11ty/css': 'css' })
    eleventyConfig.addPassthroughCopy('images')

    eleventyConfig.addCollection("allThings", function(collectionApi) {
        return collectionApi.getFilteredByGlob("**/*.md").filter((item) => {
            return item.url !== '/all/' && item.url !== '/' && ! item.data.hidden
        });
    });

    const fixContent = (content) => {
        // Remove the extra [ ] added by Foam.
        content = content.replace(/\[<a/g, '<a').replace(/\/a>]/g,'/a>')
        // Fix relative images.
        content = content
            .replace(/"images/g, '"../images')
            .replace(/ images/g, ' ../images');
        // Fix relative links.
        content = content
            .replace(/href="(?!https?:\/\/)/g, 'href="../')
            .replace(/href="..\/..\/\//g, 'href="../../');

        return content;
    }

    // Before other transforms.
    eleventyConfig.addTransform("contentFixPre", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            return fixContent(content);
        }
        return content;
    });

    eleventyConfig.addPlugin(pluginLocalRespimg, {
        folders: {
            source: "./",
            output: "_site",
        },
        images: {
          resize: {
            min: 350, // Minimum width to resize an image to
            max: 800, // Maximum width to resize an image to
            step: 150, // Width difference between each resized image
          },
          gifToVideo: false, // Convert GIFs to MP4 videos
          sizes: '100%', // Default image `sizes` attribute
          lazy: true, // Include `loading="lazy"` attribute for images
          additional: [
            // Globs of additional images to optimize (won't be resized)
            'images/icons/**/*',
          ],
          watch: {
            src: 'images/**/*', // Glob of images that Eleventy should watch for changes to
          }
        },
      });

      eleventyConfig.addPlugin(syntaxHighlight);
      const highlighter = eleventyConfig.markdownHighlighter;
      eleventyConfig.addMarkdownHighlighter((str, language) => {
        if (language === "mermaid") {
        return `<pre class="mermaid">${str}</pre>`;
        }
        return highlighter(str, language);
      });

    // After other transforms.
    eleventyConfig.addTransform("contentFixPost", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            return fixContent(content);
        }
        return content;
    });

    eleventyConfig.addPlugin(ogPlugin, {
        output: path.join("_site/images")
    });


    return {
        dir: {
            input: "./",
            output: "_site",
            includes: "_11ty/_includes",
            data: "_11ty/_data",
        }
    }
}
