import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ListElement(props) {
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        onClick={() => props.setPage(props.name)}
        style={{ cursor: "pointer" }}
      >
        {props.name}
      </a>
    </li>
  );
}
