const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const ogPlugin = require("./lib/og-plugin");
const path = require("path");

module.exports = (eleventyConfig) => {
    /* Copy important assets. */
    eleventyConfig.addPassthroughCopy({ '_11ty/css': 'css' })
    eleventyConfig.addPassthroughCopy('images')

    /* Create the /all collection. */
    eleventyConfig.addCollection("allThings", function(collectionApi) {
        return collectionApi.getFilteredByGlob("**/*.md").filter((item) => {
            return item.url !== '/all/' && item.url !== '/' && ! item.data.hidden
        });
    });

    /* Generate og images. */
    eleventyConfig.addPlugin(ogPlugin, {
        output: path.join("_site/images"),
        siteMetadata: require("./_data/siteMetadata.js")(eleventyConfig),
    });

    const fixContent = (content) => {
        // Remove the extra [ ] added by Foam.
        content = content.replace(/\[<a/g, '<a').replace(/\/a>]/g,'/a>')
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

    /* Add reponsive images. */
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// which file extensions to process
		extensions: "html",
        urlPath: "/images/",
        outputDir: "./_site/images/",
		// Add any other Image utility options here:

		// optional, output image formats
		formats: ["webp", "jpeg"],
		//formats: ["auto"],

		// optional, output image widths
		// widths: ["auto"],

		// optional, attributes assigned on <img> override these values.
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
	});

    /* Add syntax highligting. */
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
    
    return {
        dir: {
            input: "./",
            output: "_site",
            includes: "_11ty/_includes",
            data: "_11ty/_data",
        }
    }
}
