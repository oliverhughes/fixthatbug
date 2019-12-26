import Typography from "@material-ui/core/Typography";
import React from "react";
import Layout from "../src/components/Layout";
import { PortChecker as PortCheckerComponent } from "../src/components/PortChecker";

const PortChecker = () => {
  return (
    <Layout
      title="Port Checker"
      description="Check open ports"
      keywords="portchecker, domain, ip, address"
      contentWidth="md"
    >
      <Typography variant="h4" component="h1" gutterBottom={true}>
        PortChecker
      </Typography>
      <Typography color="textSecondary" gutterBottom={true}>
        Online port checker, check what ports are open on your chosen IP or
        domain name
      </Typography>
      <PortCheckerComponent />
    </Layout>
  );
};

export default PortChecker;
