import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DevicesIcon from "@material-ui/icons/Devices";
import InfoIcon from "@material-ui/icons/Info";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  title: {
    padding: theme.spacing(2)
  }
}));

const AppDrawer = ({ drawerOpen, drawerToggle }) => {
  const classes = useStyles({});

  return (
    <Drawer open={drawerOpen} onClose={drawerToggle(false)}>
      <div
        className={classes.list}
        role="presentation"
        onClick={drawerToggle(false)}
        onKeyDown={drawerToggle(false)}
      >
        <Link href="/">
          <Typography className={classes.title} variant="h6">
            _> Fix That Bug
          </Typography>
        </Link>
        <Divider />
        <List>
          <Link href="/what-is-my-ip">
            <ListItem button={true}>
              <ListItemIcon>
                <DevicesIcon />
              </ListItemIcon>
              <ListItemText primary="What is my IP" />
            </ListItem>
          </Link>
          <Link href="/">
            <ListItem button={true}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
        </List>
      </div>
    </Drawer>
  );
};

AppDrawer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  drawerToggle: PropTypes.func.isRequired
};

export default AppDrawer;
