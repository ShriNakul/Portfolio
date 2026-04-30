import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./home/Home";
import Header from "./header/Header";
import Projects from "./projects/Projects";
import WhyMe from "./whyMe/WhyMe";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";

export default function Main() {
  const [page, setPage] = React.useState("Home");

  return (
    <div>
      <Header setPage={setPage} />
      {page === "Home" && <Home />}
      {page === "Skills" && <Skills />}
      {page === "Projects" && <Projects />}
      {page === "Why Me" && <WhyMe />}
      {page === "Contact" && <Contact />}
      {/* 
      <Footer /> */}
    </div>
  );
}
