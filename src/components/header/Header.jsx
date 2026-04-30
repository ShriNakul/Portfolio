import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListElement from "./ListElement";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto nav-links">
            <ListElement name="Home" setPage={props.setPage} />
            <ListElement name="Skills" setPage={props.setPage} />
            <ListElement name="Projects" setPage={props.setPage} />
            <ListElement name="Why Me" setPage={props.setPage} />
            <ListElement name="Contact" setPage={props.setPage} />
          </ul>
        </div>
      </div>
    </nav>
  );
}
