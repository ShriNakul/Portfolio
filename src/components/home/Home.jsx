import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Home() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-5">
        <div className="col pt-5 mt-5">
          <h1 className="fw-bold mb-4 pt-5 mt-5">I am Shri, a web dev!</h1>
          <h3>(A little kid who knows how to code)</h3>
        </div>

        <div className="col text-end float-right">
          <img
            src="./logo.png"
            alt=""
            className="img-fluid image mt-5 me-5 me-sm-0 pe-5 pe-sm-0"
          />
        </div>
      </div>
    </div>
  );
}
