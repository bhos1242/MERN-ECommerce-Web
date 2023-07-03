import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
        {/* Add other meta tags or custom stylesheets here */}
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
