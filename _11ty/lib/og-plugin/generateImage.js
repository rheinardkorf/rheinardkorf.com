const path = require('path');
const fs = require('fs');
const Jimp = require('jimp');

const textLayer = async (props) => {

    const {
        font,
        width,
        height,
        color,
        x = 10,
        y = 10,
        paddingY = 50,
        text = "no text here"
    } = props;

    const scale = 0.5;

    const layer = new Jimp(
        width / scale,
        height / scale,
        "transparent"
    );

    layer.print(
        font, x, y,
        {
            text,
            // alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_TOP,
        },
        (width - (paddingY*2)) / scale ,
        height / scale
    );

    layer.scaleToFit(width, height);
    layer.color([{apply: "mix", params: [color, 100]}]);
    layer.autocrop();

    return layer;
}

// Calculate actual number of lines.
const numberOfLines = (calculatedHeight, fontSize) => Math.round(Math.abs((calculatedHeight-fontSize)/fontSize)) + 1;

// Get height based on lines and expected font size.
const sizedHeight = (calculatedHeight, fontSize) => numberOfLines(calculatedHeight, fontSize) * fontSize;


module.exports = async (props) => {
    const {
        title,
        tags,
        slug,
        options: {
            output = path.join("./images"),
            baseUrl = props.siteMetadata.baseUrl + '/images/',
            primaryFont,
            primaryFontSize = 70,
            secondaryFont,
            secondaryFontSize = 32,
            primaryColor,
            secondaryColor,
            backgroundImage,
            backgroundDimensions: {
                width = 1200,
                height = 630,
            },
            paddingLeft = 50,
            quality = 100,
            excludeTags,
        },
    } = props;

    const imageFilename = `og_${slug}.png`;
    const url = `${baseUrl}${imageFilename}`;

    const imageFile = path.join(output, imageFilename);

    if ( fs.existsSync(imageFile) ) {
        return url;
    }

    console.log(`Writing ${imageFile}`);

    // Remove tags that should not be used.
    const tagSet = excludeTags ? new Set(excludeTags) : false;
    const includeTags = tags && tagSet ? [...new Set([...tags].filter(x => !tagSet.has(x)))] : false;

    // Image from background image or color.
    const img = backgroundImage.clone();

    img.quality(quality);

    const titleLayer = await textLayer({
        font: primaryFont,
        width,
        height,
        color: primaryColor,
        paddingY: paddingLeft,
        text: title,
    })

    const titleHeight = sizedHeight( titleLayer.bitmap.height, primaryFontSize);

    // Put titleLayer on img.
    img.composite(
        titleLayer,
        paddingLeft,
        (height - titleHeight)/2
    );

    if ( includeTags ) {
        const tagLayer = await textLayer({
            font: secondaryFont,
            width,
            height,
            color: secondaryColor,
            paddingY: paddingLeft,
            text: includeTags.map(tag=> `#${tag}`).join(' ')
        })

        const tagOffset = 100;
        const tagHeight = sizedHeight( tagLayer.bitmap.height, 32);

        img.composite(
            tagLayer,
            paddingLeft,
            (height - tagHeight + titleHeight + tagOffset)/2,
        );
    }

    await img.writeAsync(imageFile);
    return url;
}
