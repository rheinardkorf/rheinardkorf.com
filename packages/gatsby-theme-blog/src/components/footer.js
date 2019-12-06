/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            domain
            social {
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
        color: 'background',
        justifyContent: "left",
        maxHeight: 60,
        fontSize: 0,
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
          © {new Date().getFullYear()} {site.siteMetadata.title} &bull; {` `}
          {site.siteMetadata.social.map(item => (
            <Styled.a href={item.url} key={item.name}>{item.name}</Styled.a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
