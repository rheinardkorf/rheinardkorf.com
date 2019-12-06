/** @jsx jsx */
import { jsx } from "theme-ui"
import { Global } from "@emotion/core"
import { css } from "theme-ui"
import { reset } from "../reset"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Global styles={css(reset)} />
      <Header />
      <main
        sx={{
          padding: 10,
          mx: "auto",
          maxWidth: 800,
          mt: 30,
          flex: "1 1 auto",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
