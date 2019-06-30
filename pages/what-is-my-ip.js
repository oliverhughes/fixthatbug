import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import DisplayMyIp from "../src/components/DisplayMyIp";
import Layout from "../src/components/Layout";
import ToolCupboard from "../src/components/ToolCupboard";

const fetchIps = async () => {
  let ipv4 = {};
  const ipv4Fetch = await fetch("https://api.ipify.org?format=json");

  ipv4Fetch.ok
    ? (ipv4 = await ipv4Fetch.json())
    : (ipv4.error = `Could not fetch IP [${ipv4Fetch.status}]`);

  let ipv6 = {};
  const ipv6Fetch = await fetch("https://api6.ipify.org?format=json");

  ipv6Fetch.ok
    ? (ipv6 = await ipv6Fetch.json())
    : (ipv6.error = `Could not fetch IP [${ipv6Fetch.status}]`);

  return {
    ipv4: ipv4.error || ipv4.ip,
    ipv6: ipv6.error || ipv6.ip
  };
};

const WhatIsMyIp = () => {
  const [ipv4, setIpv4] = useState("...");
  const [ipv6, setIpv6] = useState("...");

  useEffect(() => {
    const fetchData = async () => {
      const { ipv4, ipv6 } = await fetchIps();
      setIpv4(ipv4);
      setIpv6(ipv6);
    };
    fetchData();
  }, []);

  const handleRefresh = async () => {
    setIpv4("...");
    setIpv6("...");

    const { ipv4, ipv6 } = await fetchIps();
    setIpv4(ipv4);
    setIpv6(ipv6);
  };

  return (
    <Layout
      title="What is my IP"
      description="IPv4 Address, IPv6 Address, IP Address Lookup"
      keywords="ip, what is my ip, my ip, my ip address, ip address, ipv4, ipv6"
    >
      <DisplayMyIp ipv4={ipv4} ipv6={ipv6} handleRefresh={handleRefresh} />
      <ToolCupboard />
    </Layout>
  );
};

export default WhatIsMyIp;
