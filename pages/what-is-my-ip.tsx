import fetch from "isomorphic-unfetch";
import React, { useEffect, useState } from "react";
import DisplayMyIp from "../src/components/DisplayMyIp";
import Layout from "../src/components/Layout";

interface IpData {
  ipv4: { ip?: string };
  ipv4Error: string;
  ipv6: { ip?: string };
  ipv6Error: string;
}

type FetchIps = () => Promise<{ ipv4: string; ipv6: string }>;

const fetchIps: FetchIps = async () => {
  const ipData: IpData = {
    ipv4: null,
    ipv4Error: null,
    ipv6: null,
    ipv6Error: null
  };
  const ipv4Fetch = await fetch("https://api.ipify.org?format=json");

  ipv4Fetch.ok
    ? (ipData.ipv4 = await ipv4Fetch.json())
    : (ipData.ipv4Error = `Could not fetch IP [${ipv4Fetch.status}]`);

  const ipv6Fetch = await fetch("https://api6.ipify.org?format=json");

  ipv6Fetch.ok
    ? (ipData.ipv6 = await ipv6Fetch.json())
    : (ipData.ipv6Error = `Could not fetch IP [${ipv6Fetch.status}]`);

  return {
    ipv4: ipData.ipv4.ip || ipData.ipv4Error,
    ipv6: ipData.ipv6.ip || ipData.ipv6Error
  };
};

const WhatIsMyIp = () => {
  const [ipv4, setIpv4] = useState("...");
  const [ipv6, setIpv6] = useState("...");

  const updateIps = async () => {
    setIpv4("...");
    setIpv6("...");
    try {
      const { ipv4, ipv6 } = await fetchIps();
      setIpv4(ipv4);
      setIpv6(ipv6);
    } catch (err) {
      setIpv4("Could not retrieve IPs :(");
      setIpv6("Could not retrieve IPs :(");
    }
  };

  useEffect(() => {
    updateIps();
  }, []);

  const handleRefresh = async () => {
    updateIps();
  };

  return (
    <Layout
      title="What is my IP"
      description="IPv4 Address, IPv6 Address, IP Address Lookup"
      keywords="ip, what is my ip, my ip, my ip address, ip address, ipv4, ipv6"
    >
      <DisplayMyIp ipv4={ipv4} ipv6={ipv6} handleRefresh={handleRefresh} />
    </Layout>
  );
};

export default WhatIsMyIp;
