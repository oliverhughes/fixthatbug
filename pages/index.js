import React from 'react';
import Typography from '@material-ui/core/Typography';

import Layout from '../src/components/Layout';
import ToolCupboard from "../src/components/ToolCupboard";

const Index = () => (
  <Layout>
    <Typography variant="h4" component="h1" gutterBottom>
      _> Fix That Bug
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      Dev tools for devs.
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      Personal project made while playing with NextJS and serverless SSR.
    </Typography>
    <ToolCupboard />
  </Layout>
);


export default Index;
