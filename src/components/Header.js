import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const Header = ({ title, description, keywords }) => (
  <Head>
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
