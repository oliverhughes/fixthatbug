import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";
import { HeaderProps } from "../types/";

const Header = ({ title, description, keywords }: HeaderProps) => (
  <Head>
    <link rel="icon" type="image/x-icon" href="/static/favicon.png" />
    <title>{title}</title>
    {description && (
      <meta name="description" content={description} key="description" />
    )}
    {keywords && <meta name="keywords" content={keywords} key="keywords" />}
  </Head>
);

Header.defaultProps = {
  title: "Fix That Bug"
};

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string
};

export default Header;
