module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({'_11ty/css': 'css'})

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
