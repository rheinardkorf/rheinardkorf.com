const pluginLocalRespimg = require('eleventy-plugin-local-respimg');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({ '_11ty/css': 'css' })
    eleventyConfig.addPassthroughCopy('images')

    const fixContent = (content) => {
        // Remove the extra [ ] added by Foam.
        content = content.replace(/\[<a/g, '<a').replace(/\/a>]/g,'/a>')
        // Fix relative images.
        content = content
            .replace(/"images/g, '"../images')
            .replace(/ images/g, ' ../images');

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

    // After other transforms.
    eleventyConfig.addTransform("contentFixPost", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            return fixContent(content);
        }
        return content;
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
