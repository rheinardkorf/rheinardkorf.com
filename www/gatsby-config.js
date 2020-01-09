module.exports = {
  siteMetadata: {
    title: `Rheinard Korf`,
    author: `Rheinard Korf`,
    description: `A personal blog to explore what motivates, drives and excites me (and hopefully someone else).`,
    // domain: `http://rheinardkorf.com/`,
    primaryNav: [
      {
        name: `Posts`,
        url: `/posts/`,
      },
      // {
      //   name: `Notes`,
      //   url: `/notes/`,
      // },
      // {
      //   name: `Tips`,
      //   url: `/tips/`,
      // },
      {
        name: `From the ashes`,
        url: `/ashes/`,
      },
    ],
    social: [
      {
        name: `Mixer`,
        url: `https://mixer.com/rheinardkorf`,
      },
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
    {
      resolve: "@korf/gatsby-theme-blog",
      options: {
        description: "All the pages",
        contentPath: "content/pages",
        basePath: "/",
        ns: "@korf/gatsby-theme-blog/pages",
      },
    },
    {
      resolve: "@korf/gatsby-theme-blog",
      options: {
        description: "All the posts",
        contentPath: "content/blog",
        basePath: "/posts/",
        useExternalMDX: true,
        ns: "@korf/gatsby-theme-blog/posts",
      },
    },
    {
      resolve: "@korf/gatsby-theme-blog",
      options: {
        description: "All the tips",
        contentPath: "content/tips",
        basePath: "/tips/",
        useExternalMDX: true,
        ns: "@korf/gatsby-theme-blog/tips",
      },
    },
    {
      resolve: "@korf/gatsby-theme-blog",
      options: {
        description: "All the notes",
        contentPath: "content/notes",
        basePath: "/notes/",
        useExternalMDX: true,
        ns: "@korf/gatsby-theme-blog/notes",
      },
    },
    {
      resolve: "@korf/gatsby-theme-blog",
      options: {
        description: "From the ashes",
        contentPath: "content/ashes",
        basePath: "/ashes/",
        useExternalMDX: true,
        ns: "@korf/gatsby-theme-blog/ashes",
      },
    },
  ],
}
