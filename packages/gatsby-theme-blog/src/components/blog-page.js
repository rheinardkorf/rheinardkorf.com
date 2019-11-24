import React from "react"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

const BlogPage = ({data}) => {
  const { page, ogImage } = data
  return (
    <Layout>
      <h1>{page.title}</h1>
      <MDXRenderer>{page.body}</MDXRenderer>
      <p>This page was updated {page.updated}.</p>
      {ogImage ? <Img
        fixed={ogImage.childImageSharp.fixed}
        alt={page.title}
      /> : null}
    </Layout>
  )
}

export default BlogPage
