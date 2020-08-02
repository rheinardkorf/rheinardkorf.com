import prismPreset from "@theme-ui/prism/presets/github.json"
import "typeface-crimson-text"
import "typeface-inter"

export const theme = {
  initialColorMode: "default",
  useCustomProperties: true,
  useColorSchemeMediaQuery: true,
  breakpoints: ["40em", "52em", "64em"],
  colors: {
    text: "#373737",
    background: "white",
    primary: "#00477C",
    secondary: "red",
    accent: "#00477C",
    muted: "rgba(0,0,0,0.04)",
    // modes: {
    //   dark: {
    //     text: "white",
    //     background: "#1e1e1e",
    //     primary: "blue",
    //     secondary: "red",
    //     accent: "blue",
    //     muted: "gray",
    //   },
    // },
  },
  fonts: {
    body: '"Inter", system-ui, sans-serif',
    heading: '"Inter", system-ui, sans-serif',
    monospace: "Menlo, monospace",
  },
  fontSizes: [
    "1.0rem",
    "1.2rem",
    "1.4rem",
    "1.6rem",
    "1.8rem",
    "1.9rem",
    "2.0rem",
    "2.2rem",
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    heavy: 900,
    bold: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacing: {
    body: "0.02em",
    caps: "0.2em",
  },
  space: [],
  sizes: [],
  borders: [],
  borderWidths: [],
  borderStyles: [],
  radii: [],
  shadows: [],
  zIndices: [],
  layout: {
    Header: {
      backgroundColor: "accent",
      display: "flex",

      Container: {
        display: "flex",
        maxWidth: "800px",
        width: "100%",
        mx: "auto",
        justifyContent: "space-between",
        alignItems: "center",
        py: "10px",
        flexDirection: ["column", "row"],

        Branding: {
          flex: "1 1 100%",

          Link: {
            textDecoration: "none",
            color: "background",
            display: "flex",
            alignItems: "center",

            Logo: {
              maxWidth: "46px",
              maxHeight: "46px",
              mr: "10px",
              mb: ["10px", "0"],
              display: "block",
            },

            Title: {
              display: ["none", "block"],
            },
          },
        },

        Navigation: {
          listStyle: "none",
          m: 0,
          p: 0,
          display: "flex",
          flex: "1 1 100%",
          justifyContent: ["center", "flex-end"],

          Item: {
            Link: {
              display: "inline-block",
              mx: 10,
              fontSize: "0.9em",
              color: "background",
              fontWeight: "body",
              textDecoration: "none",
              borderBottom: "1px dashed",
              borderBottomColor: "background",
              "&:hover": {
                borderBottomColor: "secondary",
              },
            },
          },
        },
      },
    },
  },
  styles: {
    a: {
      fontWeight: "bold",
      textDecoration: "none",
      borderBottom: "1px dashed",
      borderBottomColor: "secondary",
    },
    hr: {
      border: "none",
      borderBottom: "1px dashed",
      borderBottomColor: "gray",
    },
    h1: {
      fontFamily: "heading",
      fontWeight: 900,
      fontSize: [5, 7],
    },
    h2: {
      fontFamily: "heading",
      fontWeight: 900,
      fontSize: [4, 6],
    },
    h3: {
      fontFamily: "heading",
      fontWeight: 900,
      fontSize: [3, 4],
    },
    h4: {
      fontFamily: "heading",
      fontWeight: 900,
      fontSize: [2, 3],
    },
    h5: {
      fontFamily: "heading",
      fontWeight: 900,
      fontSize: [1, 2],
    },
    h6: {
      fontFamily: "heading",
      fontWeight: 900,
      fontSize: [0, 1],
    },
    code: {
      backgroundColor: "muted",
      border: theme => `1px dashed ${theme.colors.primary}`,
      fontSize: "0.9em",
      padding: "3px",
      borderRadius: "5px",
    },
    // Prismjs styles.
    pre: {
      ...prismPreset,
      fontSize: ["0.7rem", "0.9rem"],
      padding: "10px",
      my: "30px",
      border: "1px solid rgba(0,0,0,0.06)",
      //   ".line-numbers-rows": {
      //     padding: "0.5em",
      //     borderRight: "3px solid rgba(0,0,0,0.06)",
      //   },
      code: {
        border: "none",
        backgroundColor: "inherit",
      },
    },
    blockquote: {
      backgroundColor: "muted",
      padding: 10,
      // fontStyle: "oblique",
      mx: 0,
      my: 20,
      p: 30,
      pb: 15,
      textAlign: "left",
    },
  },
}
