import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="col">
      <a href={props.link} className="text-white text-decoration-none">
        <div
          className="card custom-card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
          style={{
            backgroundImage: `url('${props.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="card-content d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <p className="me-5 card-text">{props.paragraph}</p>
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
              {props.name}
            </h3>
          </div>
        </div>
      </a>
    </div>
  );
}
