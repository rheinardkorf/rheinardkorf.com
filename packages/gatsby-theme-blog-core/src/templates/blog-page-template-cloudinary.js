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
    ogImage: file(name: { eq: $ogImage }) {
      asset: childCloudinaryAsset {
        fixed(width: 1200) {
          ...CloudinaryAssetFixed
        }
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`

export default BlogPage