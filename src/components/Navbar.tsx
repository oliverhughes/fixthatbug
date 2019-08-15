import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import React from "react";
import { NavbarProps } from "../types/";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const Navbar = ({ drawerToggle, title }: NavbarProps) => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
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
