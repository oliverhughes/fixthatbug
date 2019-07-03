import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    background: "#40E0D0",
    background: "linear-gradient(to left, #f7ff00, #db36a4)"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const Navbar = ({ drawerToggle, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={drawerToggle(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="h1">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Fix That Bug"
};

Navbar.propTypes = {
  drawerToggle: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default Navbar;
