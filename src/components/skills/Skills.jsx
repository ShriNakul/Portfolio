import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Skills from "./skills.json";
import FeaturedTitle from "./FeaturedTitle";

export default function Skill() {
  return (
    <div className="container">
      <div>
        <div className="col mt-5">
          <h1 className="fw-bold mb-4 pt-5 mt-5">Things I am good at...</h1>

          <div className="row row-cols-1 row-cols-sm-2 g-4 mt-3">
            {Skills.map((skill, index) => (
              <FeaturedTitle
                key={index}
                name={skill.name}
                description={skill.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
