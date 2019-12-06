module.exports = ({
  description = "Blog",
  basePath = "/",
  contentPath = "blog",
  useExternalMDX = false,
  ns = "@korf/gatsby-theme-blog"
}) => ({
    description,
    basePath,
    contentPath,
    useExternalMDX,
    ns
});
