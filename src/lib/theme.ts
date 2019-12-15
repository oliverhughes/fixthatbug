import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#272727"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#ededed"
    }
  }
});

export default theme;
