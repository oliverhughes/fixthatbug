import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import Layout from '../src/components/Layout';
import ToolCupboard from "../src/components/ToolCupboard";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    marginBottom: theme.spacing(4)
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  section: {
    margin: theme.spacing(3, 2)
  }
}));

const fetchIps = async () => {
  const ipv4Fetch = await fetch('https://api.ipify.org?format=json');
  const ipv4 = await ipv4Fetch.json();

  const ipv6Fetch = await fetch("https://api6.ipify.org?format=json");
  const ipv6 = await ipv6Fetch.json();

  return {
    ipv4: ipv4.ip,
    ipv6: ipv6.ip
  };

};

const WhatIsMyIp = () => {
  const [ipv4, setIpv4] = useState("...");
  const [ipv6, setIpv6] = useState("...");
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const { ipv4, ipv6 } = await fetchIps()
      setIpv4(ipv4);
      setIpv6(ipv6)
    }
    fetchData();
  }, []);

  const handleRefresh = async () => {
    setIpv4("...");
    setIpv6("...")

    const { ipv4, ipv6 } = await fetchIps()
      setIpv4(ipv4);
      setIpv6(ipv6)
  }

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
            <Button onClick={handleRefresh} color="primary" size="small"><RefreshIcon className={classes.icon} />Refresh</Button>
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

export default WhatIsMyIp;
