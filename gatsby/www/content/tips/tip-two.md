---
title: This is Tip Two.
---

```javascript
import { graphql } from "gatsby"
import BlogPage from "../components/blog-page"

export const query = graphql`
  query($pageID: String, $ogImage: String) {
    page: blogPage(id: { eq: $pageID }) {
      title
      updated(fromNow: true)
      body
      sourceInstanceName
    }
    ogImage: file(absolutePath: { regex: $ogImage }) {
      childImageSharp {
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
```
