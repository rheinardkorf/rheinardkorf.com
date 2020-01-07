/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import { Styled } from "theme-ui"

const BlogPage = ({ path, data }) => {
  const { page, ogImage } = data

  const title = path !== "/" ? page.title : ""

  return (
    <Layout>
      <SEO
        title={page.title}
        image={ogImage ? ogImage.childImageSharp.fixed.src : null}
      />
      <Styled.h1>{title}</Styled.h1>
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
