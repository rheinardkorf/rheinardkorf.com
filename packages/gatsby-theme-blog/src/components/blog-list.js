
/** @jsx jsx */
import { jsx } from "theme-ui"
import logo from "../assets/logo.svg"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            domain
          }
        }
      }
    `
  )

  return (
    <div sx={{
        padding: 20,
        display: "flex",
        backgroundColor: "text",
        justifyContent: "center",
    }}>
      <Link to="/" sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: 'none',
        color: 'background'
      }}>
        <img
          sx={{
            maxWidth: 50,
          }}
          src={logo}
        />
        <div sx={{
            fontFamily: 'heading',
            fontWeight: 'heading',
            margin: 10,
            fontSize: 25
        }}>
        {site.siteMetadata.title}
        </div>
      </Link>
    </div>
  )
}

export default Header
