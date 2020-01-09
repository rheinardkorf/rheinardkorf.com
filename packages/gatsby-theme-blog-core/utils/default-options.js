module.exports = ({
  description = "Blog",
  basePath = "/",
  contentPath = "blog",
  useExternalMDX = false,
  useCloudinary = false,
  cloudinaryFolder = "gatsby-cloudinary",
  ns = "@korf/gatsby-theme-blog",
  titleField = "seoTitle",
}) => ({
  description,
  basePath,
  contentPath,
  useExternalMDX,
  useCloudinary,
  cloudinaryFolder,
  ns,
  titleField,
})
