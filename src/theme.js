import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

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
