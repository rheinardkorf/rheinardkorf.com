/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import { Styled } from "theme-ui"

const BlogPage = ({ path, data }) => {
  const { page, ogImage } = data
  return (
    <Layout>
      <SEO
        title={page.seoTitle}
        image={ogImage ? ogImage.asset.fixed.src : null}
        description={page.seoDescription || page.excerpt}
      />
      <Styled.h1>{page.title}</Styled.h1>
      <MDXRenderer>{page.body}</MDXRenderer>
      {/* { path !== "/" ?
      <p sx={{
        fontStyle: "oblique",
        color: "gray",
      }}><small>This page was updated {page.updated}.</small></p> : null
      } */}
    </Layout>
  )
}

export default BlogPage
