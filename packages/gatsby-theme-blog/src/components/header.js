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
        variant: "layout.Header",
      }}
    >
      <div
        sx={{
          variant: "layout.Header.Container",
        }}
      >
        <div
          sx={{
            variant: "layout.Header.Container.Branding",
          }}
        >
          <Link
            to="/"
            sx={{
              variant: "layout.Header.Container.Branding.Link",
            }}
          >
            <img
              sx={{
                variant: "layout.Header.Container.Branding.Link.Logo",
              }}
              src={logo}
              alt={site.siteMetadata.title + " logo"}
            />
            <div
              sx={{
                variant: "layout.Header.Container.Branding.Link.Title",
              }}
            >
              {site.siteMetadata.title}
            </div>
          </Link>
        </div>
        <ul
          sx={{
            variant: "layout.Header.Container.Navigation",
          }}
        >
          {site.siteMetadata.primaryNav.map(item => (
            <li
              sx={{
                variant: "layout.Header.Container.Navigation.Item",
              }}
            >
              <Link
                to={item.url}
                key={item.name}
                sx={{
                  variant: "layout.Header.Container.Navigation.Item.Link",
                }}
              >
                <span
                  sx={{
                    variant: "layout.Header.Container.Navigation.Item.Label",
                  }}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
