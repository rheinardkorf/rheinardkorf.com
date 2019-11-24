module.exports = themeOptions => {

  return {
    plugins: [
      {
        resolve: "@korf/gatsby-theme-blog-core",
        options: {
          ...themeOptions
        }
      },
      {
        resolve: "@korf/gatsby-theme-blog-og-image",
        options: {
          ...themeOptions
        }
      }
    ]
  };
};
