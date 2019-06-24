import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Layout from '../src/components/Layout';
import ToolCupboard from "../src/components/ToolCupboard";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    marginBottom: theme.spacing(4)
  },
  section: {
    margin: theme.spacing(3, 2)
  }
}));

const WhatIsMyIp = ({ ipv4, ipv6 }) => {
  const classes = useStyles();

  return (
    <Layout title="What is my IP">
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.section}>
            <Typography variant="h5" gutterBottom>
              Your IP Addresses:
            </Typography>
          </div>
          <Divider variant="middle"/>
          <div className={classes.section}>
            <Typography color="textSecondary">IPv4 Address:</Typography>
            <Typography variant="h6" gutterBottom>
              {ipv4}
            </Typography>
          </div>
          <div className={classes.section}>
            <Typography color="textSecondary">IPv6 Address:</Typography>
            <Typography variant="h6" gutterBottom>
              {ipv6}
            </Typography>
          </div>
          <Typography color="textSecondary" variant="body2">
            This is your public facing IP assigned by your ISP. You will share the same Public IP with devices connected to the same router.
          </Typography>
        </CardContent>
      </Card>
      <ToolCupboard />
    </Layout>
  );
}

WhatIsMyIp.getInitialProps = async () => {

  const ipv4Fetch = await fetch('https://api.ipify.org?format=json');
  const ipv4 = await ipv4Fetch.json();

  const ipv6Fetch = await fetch("https://api6.ipify.org?format=json");
  const ipv6 = await ipv6Fetch.json();

  return {
    ipv4: ipv4.ip,
    ipv6: ipv6.ip
  };

};

export default WhatIsMyIp;
