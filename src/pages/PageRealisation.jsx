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

  const isGitHubLink = item.url.includes("github.com");
  const linkText = isGitHubLink ? "Voir le code" : "Visiter le site";

  return (
    <div className="realisation-container">
      <h1 className="realisation-title">{item.title}</h1>
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="realisation-link">{linkText}</a>
      <Tags />
      <p className="description-p">{item.description1}</p>
      <p className="description-p">{item.description2}</p>
      <p className="description-p last-p">{item.description3}</p>
    </div>
  );
};

export default PageRealisation;



