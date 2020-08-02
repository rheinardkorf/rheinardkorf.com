/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import { Link } from "gatsby"

const BlogArchive = props => {
  const { data, pageContext } = props
  const { description } = pageContext
  const pages = data.allPages.pages
  return (
    <Layout>
      <div
        sx={{
          fontSize: 5,
          fontWeight: "heavy",
          my: "0.67em",
        }}
      >
        {description}
      </div>
      <ul
        sx={{
          listStyle: "none",
          padding: 0,
          fontSize: 0,
        }}
      >
        {pages.map(page => {
          return (
            <li
              sx={
                {
                  mb: 30
                }
              }

              key={page.title}
            >
              <div
                sx={{
                  fontSize: 2,
                  fontWeight: "heading",
                  mb: 5,
                }}
              >
              <Link to={page.path} sx={{ variant: 'styles.a'}}>{page.title}</Link>
              </div>
              <p>{page.excerpt}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogArchive
