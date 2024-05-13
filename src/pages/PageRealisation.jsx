import React from "react";
import { useParams } from "react-router-dom";
import dataTab from "../data.json";
import Tags from "../components/Tags";
import NotFound from "./NotFound";

const PageRealisation = () => {
  const { id } = useParams();
  const item = dataTab.find((item) => item.id === id);

  if (!item) {
    return <NotFound />;
  }

  return (
    <div className="realisation-container">
      <h1 className="realisation-title">{item.title}</h1>
      <Tags />
          <div className="description-start-left">
            <p className="description-p p-left">{item.description1}</p>
            <img className="description-img" src={item.picture1} alt="" />
          </div>
          <div className="description-start-right">
            <img className="description-img" src={item.picture2} alt="" />
            <p className="description-p p-right">{item.description2}</p>
          </div>
          <div className="description-start-left">
            <p className="description-p p-left">{item.description3}</p>
            <img className="description-img" src={item.picture3} alt="" />
          </div>
      </div>
  );
};

export default PageRealisation;

