import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import dataTab from "./data.json";
import PageRealisation from "./pages/PageRealisation";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";

const App = () => {
  return (
    <Router>
      <Topbar />
      <BurgerMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realisation/:id" element={<PageRealisation data={dataTab} />} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
