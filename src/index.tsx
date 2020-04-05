import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import Home from "components/home/Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const lightGreen = "#A2E3C4";
const jacket = "#223029";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightGreen,
    },
    secondary: {
      main: jacket,
    },
  },
  typography: {
    h4: {
      color: jacket,
    },
    h5: {
      color: jacket,
    },
    h6: {
      color: jacket,
    },
    body1: {
      color: jacket,
    },
    subtitle2: {
      color: jacket,
    },
    caption: {
      color: jacket,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
