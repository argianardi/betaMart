import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="p-[2px] overflow-x-hidden sml:px-4 mdl:px-10 lgm:px-20">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
