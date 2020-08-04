module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({ '_11ty/css': 'css' })

    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            // Remove the extra [ ] added by Foam.
            return content.replace(/\[<a/g, '<a').replace(/\/a>]/g,'/a>');
        }

        return content;
    });

    return {
        dir: {
            input: "./",
            output: "_site",
            includes: "_11ty/_includes",
            // layouts: "_11ty/_layouts",
            data: "_11ty/_data",

        }
    }
}
