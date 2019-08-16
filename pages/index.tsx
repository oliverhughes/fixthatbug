import Typography from "@material-ui/core/Typography";
import React from "react";
import Layout from "../src/components/Layout";

const Index = () => (
  <Layout>
    <Typography variant="h4" component="h1" gutterBottom={true}>
      _> Fix That Bug
    </Typography>
    <Typography color="textSecondary" gutterBottom={true}>
      Dev tools for devs.
    </Typography>
    <Typography color="textSecondary" gutterBottom={true}>
      Personal project made while playing with NextJS and serverless SSR.
    </Typography>
  </Layout>
);

export default Index;
