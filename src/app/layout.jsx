import React from "react";
import "./global.css";
import Header from "@/components/Header";
import Head from "./head";
import Provider from "./Provider";
import Tabs from "@/components/Tabs";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Head />
        <Provider>
          <Header />
          <Tabs />
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
