const path = require("path")
const Jimp = require("jimp")
const cheerio = require('cheerio')
const generateImage = require('./generateImage')
const fs = require('fs')
const deasync = require('deasync');

Jimp.loadFont = deasync(Jimp.loadFont);
Jimp.read = deasync(Jimp.read);

module.exports = function (eleventyConfig, pluginOptions) {

    // @TODO abstract this better.
    pluginOptions = {
        primaryFont: Jimp.loadFont(path.join(__dirname, "assets", "crimson-text-700.fnt")),
        secondaryFont: Jimp.loadFont(path.join(__dirname, "assets", "courier-prime-italic.fnt")),
        primaryFontSize: 70,
        secondaryFontSize: 32,
        primaryColor: '#ffffff',
        secondaryColor: '#DB2F2F',
        backgroundImage: fs.existsSync(path.join(__dirname, "assets", "background.png"))
            ? Jimp.read(path.join(__dirname, "assets", "background.png"))
            : new Jimp(options.width, options.height, "#323232"),
        backgroundDimensions: {
            width: 1200,
            height: 630,
        },
        paddingLeft: 50,
        excludeTags: [ 'page' ],
        ...pluginOptions
    }

    eleventyConfig.addTransform("generateOG", async function (content, outputPath) {

        const {
            title,
            description,
            date,
            siteMetadata,
            page,
            socialTitle,
            socialDescription,
            socialImage,
            twitterCard = "summary_large_image",
            ogType = "website",
            tags
        } = this.dataCache;

        const theTitle = socialTitle || title || "";
        const theURL = `${siteMetadata.baseUrl}${page.url}`;
        const authorHandle = `@` + siteMetadata.social.twitter.split('/').pop();
        const theDescription = socialDescription || description || "";
        const theImage = socialImage || await generateImage({
            title: theTitle,
            tags,
            slug: page.fileSlug,
            options: pluginOptions,
            siteMetadata
        })

        const $ = cheerio.load(content);

        // Open Graph data.
        $('head').append(`<meta property="og:title" content='${theTitle}' />`);
        $('head').append(`<meta property="og:type" content="${ogType}" />`);
        $('head').append(`<meta property="og:url" content="${theURL}" />`);
        $('head').append(`<meta property="og:image" content="${theImage}" />`);
        $('head').append(`<meta property="og:site_name" content='${siteMetadata.title}' />`);
        if ( theDescription ) {
            $('head').append(`<meta property="og:description" content='${theDescription}' />`);
        }

        // Twitter Card.
        $('head').append(`<meta property="twitter:card" content="${twitterCard}" />`);
        $('head').append(`<meta property="twitter:site" content="${authorHandle}" />`);
        $('head').append(`<meta property="twitter:title" content='${theTitle}' />`);
        if ( theDescription ) {
            $('head').append(`<meta property="twitter:description" content='${theDescription}' />`);
        }
        $('head').append(`<meta property="twitter:creator" content="${authorHandle}" />`);
        $('head').append(`<meta property="twitter:image" content="${theImage}" />`);

        return $.html();
    });
}
