const path = require("path")
const fs = require("fs")
const withDefaults = require("./utils/default-options")
const Jimp = require("jimp")
const slugify = require("@sindresorhus/slugify")

exports.onCreateNode = async ({ store, node }, options) => {
  const { program } = store.getState()

  const {
    ogBackgroundColor,
    ogHeight,
    ogWidth,
    ns,
    contentPath,
    imagePath,
    ogBackgroundImage,
    ogBaseFontSize,
    ogFontSize,
    ogVBandColor,
    ogVBandWidth,
    ogHBandColor,
    ogHBandWidth,
    ogTextColor,
    ogTextOpacity,
    titleField,
  } = withDefaults(options)

  const dir = path.join(program.directory, contentPath, imagePath)
  const scaleFactor = ogFontSize / ogBaseFontSize

  // Only BlogPage nodes within the expected namespace.
  if (node.internal.type === "BlogPage" && node.sourceInstanceName === ns) {
    const name = slugify(node[titleField])

    const img = fs.existsSync(ogBackgroundImage)
      ? await Jimp.read(ogBackgroundImage)
      : new Jimp(ogWidth, ogHeight, ogBackgroundColor)

    if (ogVBandWidth > 0) {
      const vBands = await new Jimp(ogVBandWidth, ogHeight, ogVBandColor)
      img.composite(vBands, 0, 0, { mode: Jimp.BLEND_SOURCE_OVER })
      img.composite(vBands, ogWidth - ogVBandWidth, 0)
    }

    if (ogHBandWidth > 0) {
      const hBands = await new Jimp(ogWidth, ogHBandWidth, ogHBandColor)
      img.composite(hBands, 0, 0, { mode: Jimp.BLEND_SOURCE_OVER })
      img.composite(hBands, 0, ogHeight - ogHBandWidth)
    }

    img.quality(100)

    const textLayer = new Jimp(
      ogWidth / scaleFactor,
      ogHeight / scaleFactor,
      "rgba(0,0,0,0)"
    )

    // Font created with `msdf-bmfont`.
    // E.g.:
    // msdf-bmfont -o crimsom-text-bold.png -s 288 -t sdf -r 2 crimson-text-700.ttf
    const font = await Jimp.loadFont(
      path.join(__dirname, "assets", "crimson-text-700.fnt") // 288pt
    )

    textLayer.print(
      font,
      0,
      0,
      {
        text: node[titleField],
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
      },
      ogWidth / scaleFactor - 200 / scaleFactor,
      ogHeight / scaleFactor
    )

    textLayer.scaleToFit(ogWidth, ogHeight)
    textLayer.color([
      {
        apply: "mix",
        params: [ogTextColor, 100],
      },
    ])

    textLayer.autocrop()

    img.composite(
      textLayer,
      (ogWidth - textLayer.bitmap.width) / 2,
      (ogHeight - textLayer.bitmap.height) / 2,
      {
        opacitySource: ogTextOpacity,
      }
    )

    await img.writeAsync(`${dir}/${name}-og.png`)
  }
}
