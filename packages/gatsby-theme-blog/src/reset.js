export const reset = {
  "*": {
    boxSizing: `border-box`,
  },
  html: {
    fontFamily: "body",
    fontWeight: "body",
    fontSize: 1,
    textSizeAdjust: "100%",
  },
  body: {
    overflowX: "hidden",
    margin: 0,
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      width: "10px",
      background: "rgba(0,0,0,0.06)",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(0,0,0,0.2)",
    },
    lineHeight: "body",
    letterSpacing: "body",
  },
  "article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary": {
    display: "block",
  },
  "audio,canvas,progress,video": {
    display: "inline-block",
    verticalAlign: "baseline",
  },

  "audio:not([controls])": {
    display: "none",
    height: 0,
  },

  "[hidden],template": {
    display: "none",
  },
  a: {
    backgroundColor: "transparent",
    "&:active,&:hover": {
      outline: 0,
    },
  },
  "abbr[title]": {
    borderBottom: "1px dotted",
  },
  "b,strong": {
    fontEeight: "bold",
  },
  dfn: {
    fontStyle: "italic",
  },

  h1: {
    fontSize: "2em",
    margin: "0.67em 0",
  },
  mark: {
    background: "#ff0",
    color: "#000",
  },
  small: {
    fontSize: "80%",
  },
  "sub,sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },
  sup: {
    top: "-0.5em",
  },
  sub: {
    bottom: "-0.25em",
  },
  img: {
    display: "block",
    border: 0,
    width: "100%",
    height: "auto",
  },

  "svg:not(:root)": {
    overflow: "hidden",
  },

  figure: {
    margin: "1em 40px",
  },

  hr: {
    boxSizing: "content-box",
    height: 0,
  },

  pre: {
    overflow: "auto",
    margin: 0,
  },

  "code,kbd,pre,samp": {
    fontFamily: "monospace, monospace",
    fontSize: "1em",
  },

  "button,input,optgroup,select,textarea": {
    color: "inherit",
    font: "inherit",
    margin: 0,
  },

  button: {
    overflow: "visible",
  },

  "button,select": {
    textTransform: "none",
  },

  'button,html input[type="button"],input[type="reset"],input[type="submit"]': {
    appearance: "button",
    cursor: "pointer",
  },

  "button[disabled],html input[disabled]": {
    cursor: "default",
  },

  "button::-moz-focus-inner,input::-moz-focus-inner": {
    border: 0,
    padding: 0,
  },

  input: {
    lineHeight: "normal",
  },

  'input[type="checkbox"],input[type="radio"]': {
    boxSizing: "border-box",
    padding: 0,
  },

  'input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button': {
    height: "auto",
  },

  'input[type="search"]': {
    appearance: "textfield",
    boxSizing: "content-box",
  },

  'input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration': {
    sppearance: "none",
  },

  fieldset: {
    border: "1px solid #c0c0c0",
    margin: "0 2px",
    padding: "0.35em 0.625em 0.75em",
  },
  legend: {
    border: 0,
    padding: 0,
  },

  textarea: {
    overflow: "auto",
  },

  optgroup: {
    fontWeight: "bold",
  },

  table: {
    borderCollapse: "collapse",
    borderSpacing: 0,
  },

  "td,th": {
    padding: 0,
  },
  p: {
    marginTop: 0,
    marginBottom: "1em",
  },
}
