import { graphql } from "gatsby"
import BlogPage from "../components/blog-page"

export const query = graphql`
  query($pageID: String, $ogImage: String) {
    page: blogPage(id: { eq: $pageID }) {
      title
      seoTitle
      seoDescription
      updated(fromNow: true)
      body
      excerpt
      sourceInstanceName
    }
    ogImage: file(absolutePath: { regex: $ogImage }) {
      asset: childImageSharp {
        fixed(width: 1200, height: 630) {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default BlogPage
