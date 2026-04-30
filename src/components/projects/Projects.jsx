import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import projects from "./CardList.json";
export default function Projects(props) {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2">Projects</h2>{" "}
      <div className="row row-cols-2 row-cols-lg-3 align-items-stretch g-4 py-5">
        {projects.map((project) => (
          <Card key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
