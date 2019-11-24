const withDefaults = require("./utils/default-options")

module.exports = options => {
	const { contentPath, useExternalMDX, ns } = withDefaults(options)

	return {
		plugins: [
			{
				resolve: "gatsby-source-filesystem",
				options: {
					name: ns,
					path: contentPath,
				},
			},
			!useExternalMDX && {
				resolve: "gatsby-plugin-mdx",
				options: {
					extensions: [".mdx", ".md"],
					gatsbyRemarkPlugins: [
						{
							resolve: "gatsby-remark-images",
							options: {
								maxWidth: options.imageMaxWidth,
								linkImagesToOriginal: false,
							},
						},
						{ resolve: "gatsby-remark-copy-linked-files" },
						{ resolve: "gatsby-remark-smartypants" },
						{
							resolve: `gatsby-remark-mermaid`,
							options: {
								language: "mermaid",
								theme: "forest",
								viewport: {
									width: 1200,
									height: 1200,
								},
								mermaidOptions: {
									themeCSS: `* {
                          font-size: 14px;
                          stroke-width: 1px;
                          margin: 0;
                          padding: 0;
                          font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
                      }`,
								},
							},
						},
						{
							resolve: "gatsby-remark-prismjs",
							options: {
								showLineNumbers: true,
							},
						},
					],
					remarkPlugins: [require("remark-slug")],
					plugins: ["gatsby-remark-images"],
				},
			},
			"gatsby-transformer-sharp",
			"gatsby-plugin-sharp",
			"gatsby-image",
		].filter(Boolean),
	}
}
