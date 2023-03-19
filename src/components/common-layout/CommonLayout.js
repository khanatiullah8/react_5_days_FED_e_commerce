import React from "react";
import Footer from "../footer";
import Header from "../header";
import KeyFeatures from "../key-features";
import NewsLetter from "../newsletter";
import ToTop from "../to-top";

const CommonLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <NewsLetter />
      <KeyFeatures />
      <ToTop />
      <Footer />
    </>
  );
};

export default CommonLayout;
