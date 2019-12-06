import { graphql } from "gatsby"
import BlogArchive from "../components/blog-archive"

export const query = graphql`
  query($source: String) {
    allPages: allBlogPage(
      sort: { fields: updated, order: DESC }
      limit: 2000
      filter: { sourceInstanceName: { eq: $source } }
    ) {
      pages: nodes {
        title
        path
        excerpt
        updated
      }
    }
  }
`

export default BlogArchive
