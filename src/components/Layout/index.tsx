import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import React, { ReactNode, useState } from "react";
import { BsBreakpoints, Event } from "../../types";
import AppDrawer from "./Drawer";
import Header from "./Header";
import Navbar from "./Navbar";
import ToolCupboard from "./ToolCupboard";

const defaultProps = {
  contentWidth: "sm",
  showNav: true
};

type Props = {
  children: ReactNode;
  contentWidth?: BsBreakpoints;
  title?: string;
  description?: string;
  keywords?: string;
} & typeof defaultProps;

const Layout = ({
  children,
  contentWidth,
  showNav,
  title,
  description,
  keywords
}: Props) => {
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
        <ToolCupboard />
      </Container>
    </>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
