import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Contact() {
  const email = "shrinram2013@gmail.com";
  const subject = encodeURIComponent("Inquiry about services");
  const body = encodeURIComponent("Hi, I'm interested in working with you...");

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

  return (
    <div className="container text-center d-flex flex-column justify-content-center my-5">
      <h1 className="fw-bold my-5">Want my services?</h1>

      <div>
        <a
          href={gmailLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark rounded-pill px-5 py-3 shadow"
        >
          Contact me here ➤
        </a>
      </div>
    </div>
  );
}
