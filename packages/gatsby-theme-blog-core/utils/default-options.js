module.exports = ({
  description = "Blog",
  basePath = "/",
  contentPath = "blog",
  useExternalMDX = false,
  ns = "@korf/gatsby-theme-blog",
  titleField = "seoTitle",
}) => ({
  description,
  basePath,
  contentPath,
  useExternalMDX,
  ns,
  titleField,
})
