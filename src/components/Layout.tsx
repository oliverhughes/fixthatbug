import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import { Event } from "../types/";
import AppDrawer from "./Drawer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({
  children,
  contentWidth,
  showNav,
  title,
  description,
  keywords
}) => {
  const [drawerOpen, toggleDrawer] = useState(false);

  const handleDrawerToggle = (open: boolean) => (event: Event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    toggleDrawer(open);
  };

  return (
    <>
      <Header title={title} description={description} keywords={keywords} />
      {showNav && <Navbar title={title} drawerToggle={handleDrawerToggle} />}
      <AppDrawer drawerToggle={handleDrawerToggle} drawerOpen={drawerOpen} />
      <Container maxWidth={contentWidth}>
        <Box my={4}>{children}</Box>
      </Container>
    </>
  );
};

Layout.defaultProps = {
  contentWidth: "sm",
  showNav: true
};

export default Layout;
