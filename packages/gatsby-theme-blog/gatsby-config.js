module.exports = themeOptions => {
  return {
    siteMetadata: {
      title: `Blog Title Placeholder`,
      author: `Name Placeholder`,
      description: `Description placeholder`,
      domain: `http://localhost:8000/`,
      primaryNav: [
        {
          name: `Blog`,
          url: `//`
        }
      ],
      social: [
        {
          name: `Twitter`,
          url: `https://twitter.com/rheinardkorf`,
        },
        {
          name: `GitHub`,
          url: `https://github.com/rheinardkorf`,
        },
      ],
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: "@korf/gatsby-theme-blog-core",
        options: {
          ...themeOptions,
        },
      },
      {
        resolve: "@korf/gatsby-theme-blog-og-image",
        options: {
          ...themeOptions,
        },
      },
      `gatsby-plugin-theme-ui`
    ],
  }
}
