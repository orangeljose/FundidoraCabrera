import React from "react"
import Home from "../pages/Home"
import Home2 from "../pages/Home2"
import Home3 from "../pages/Home3"
// import Search from "../pages/Search"
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout"
type LayoutType = React.FC<{
  children: React.JSX.Element | React.JSX.Element[]
}>;
type PageType = React.FC;

export const WebRouter: React.FC = () => {
  const loadLayout = (Layout: LayoutType, Page: PageType) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayout(Layout, Home)} />
      <Route path="/Marketplace" element={loadLayout(Layout, Home2)} />
      <Route path="/Company" element={loadLayout(Layout, Home3)} />
      {/* <Route path="/search/:query" element={loadLayout(Layout, Search)} /> */}
    </Routes>
  )
}
export default WebRouter