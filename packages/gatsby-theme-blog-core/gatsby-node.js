const path = require("path")
const fs = require("fs")
const mkdirp = require("mkdirp")
const withDefaults = require("./utils/default-options")
const slugify = require("@sindresorhus/slugify")

exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState()
  const { contentPath } = withDefaults(options)

  const dir = path.join(program.directory, contentPath)

  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir)
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
        type BlogPage implements Node @dontInfer {
            id: ID!
            title: String!
            path: String!
            updated: Date! @dateformat
            body: String!
            excerpt: String!
            sourceInstanceName: String!
            basePath: String!
        }
    `)
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId }, options) => {
  const { basePath, ns } = withDefaults(options)
  const parent = getNode(node.parent)

  // Only MDX
  if (node.internal.type === "Mdx" && parent.sourceInstanceName === ns) {
    // Index is special.
    const pageName = parent.name != "index" ? parent.name : ""
    const pagePath = path.join(
      "/",
      basePath,
      parent.relativeDirectory,
      pageName
    )
    console.log(pagePath)
    actions.createNode({
      id: createNodeId(`BlogPage-${node.id}`),
      title: node.frontmatter.title || parent.name,
      updated: parent.modifiedTime,
      path: pagePath,
      parent: node.id,
      internal: {
        type: "BlogPage",
        contentDigest: node.internal.contentDigest,
      },
      sourceInstanceName: parent.sourceInstanceName,
      basePath: basePath,
    })
  }
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    BlogPage: {
      body: {
        type: "String!",
        resolve: (source, args, context, info) => {
          // Load Mdx resolvers
          const type = info.schema.getType("Mdx")
          const mdxFields = type.getFields()
          const resolver = mdxFields.body.resolve

          const mdxNode = context.nodeModel.getNodeById({ id: source.parent })
          return resolver(mdxNode, args, context, {
            fieldName: "body",
          })
        },
      },
      excerpt: {
        type: "String!",
        args: {
          pruneLength: {
            type: `Int`,
            defaultValue: 140,
          },
        },
        resolve: (source, args, context, info) => {
          // Load Mdx resolvers
          const type = info.schema.getType("Mdx")
          const mdxFields = type.getFields()
          const resolver = mdxFields.excerpt.resolve

          const mdxNode = context.nodeModel.getNodeById({ id: source.parent })
          return resolver(mdxNode, args, context, {
            fieldName: "excerpt",
          })
        },
      },
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }, options) => {

  const {ns, basePath, description} = withDefaults(options)

  const result = await graphql(`
    query {
      allBlogPage(sort: { fields: updated, order: DESC }, limit: 2000) {
        nodes {
          id
          path
          title
          basePath
          updated
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("error loading blog", result.errors)
  }

  const blogPageTemplate = require.resolve("./src/templates/blog-page-template")
  const blogArchiveTemplate = require.resolve("./src/templates/blog-archive-template")

  const pages = result.data.allBlogPage.nodes

  // console.log(options)
  actions.createPage({
    path: basePath,
    component: blogArchiveTemplate,
    context: {
      source: ns,
      description,
    },
  })

  pages.forEach(page => {
    actions.createPage({
      path: page.path,
      component: blogPageTemplate,
      context: {
        pageID: page.id,
        ogImage: `${page.basePath}.*/${slugify(page.title).replace(
          "*",
          "*"
        )}-og.png/`,
        pagePath: page.path,
      },
    })
  })
}
