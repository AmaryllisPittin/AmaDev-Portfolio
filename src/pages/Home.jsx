import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import About from "../components/About";
import Services from "../components/Services";
import Realisations from "../components/Realisations";
import Competences from "../components/Competences";
import Formation from '../components/Formation';


const Index = () => {
  return (
    <div>
        <HeaderBanner />
        <About />
        <Services />
        <Realisations />
        <Competences />
        <Formation />
    </div>
  );
};

export default Index;