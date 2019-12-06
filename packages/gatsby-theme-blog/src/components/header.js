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
            primaryNav {
                name
                url
            }
          }
        }
      }
    `
  )

  return (
    <div
      sx={{
        display: "flex",
        backgroundColor: "text",
        justifyContent: "left",
        maxHeight: 60,
      }}
    >
      <div
        sx={{
          padding: 0,
          mx: "auto",
          minWidth: [320, 700, 800],
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          sx={{
            mt: [10,30],
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            color: "background",
            borderBottom: "0px",
            borderBottomStyle: "none",
          }}
        >
          <img
            sx={{
              maxWidth: 80,
            }}
            src={logo}
            alt={site.siteMetadata.title + ' logo'}
          />
        </Link>
        <div
          sx={{
            a: {
                mx: 10,
              fontSize: "0.9em",
              color: "background",
              fontWeight: "body",
              textDecoration: "none",
              borderBottom: "1px dashed",
              borderBottomColor: "background",
              "&:hover": {
                borderBottomColor: "primary",
              },
            },
          }}
        >
          {site.siteMetadata.primaryNav.map(item => (
            <Link to={item.url} key={item.name}>{item.name}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
