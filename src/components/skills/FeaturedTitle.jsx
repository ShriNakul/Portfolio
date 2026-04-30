import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FeaturedTitle(props) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const descriptionStyle = {
    maxHeight: isVisible ? "200px" : "0px",
    opacity: isVisible ? 1 : 0,
    overflow: "hidden",
    transition: "all 0.35s ease",
  };

  return (
    <div className="col d-flex flex-column gap-2">
      <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
      <h4
        className="fw-semibold mb-0"
        style={{ cursor: "pointer" }}
        onClick={toggleVisibility}
      >
        {props.name}
        <span className="ms-2">{isVisible ? "▲" : "▼"}</span>
      </h4>

      <div style={descriptionStyle}>
        <p className="m-0">{props.description}</p>
      </div>
    </div>
  );
}
