import React, { useState } from "react";
import Navbar from "./Navbar";
import AppDrawer from "./Drawer";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Layout = ({ children, contentWidth, showNav, title }) => {
  const [drawerOpen, toggleDrawer] = useState(false);

  const handleDrawerToggle = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    toggleDrawer(open)
  };

  return (
    <>
      {showNav && <Navbar title={title} drawerToggle={handleDrawerToggle} />}
      <AppDrawer drawerToggle={handleDrawerToggle} drawerOpen={drawerOpen} />
      <Container maxWidth={contentWidth}>
        <Box my={4}>
          { children }
        </Box>
      </Container>
    </>
  )
}

Layout.defaultProps = {
  contentWidth:"sm",
  showNav: true,
}

export default Layout;