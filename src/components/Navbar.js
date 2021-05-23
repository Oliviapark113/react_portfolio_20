import React from "react";
import "./css/style.css";
import "./css/navbar.css";
import Resume from "../components/pages/Resume"

function Navbar({handlePageChange,currentPage,toggleBtn}) {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
        <h2 id="signature">Olivia Park</h2>
    </div>

      <ul className="navbar-list">
        <li>
          <a href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}>About</a>
        </li>
        <li><a href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>Contact</a>
          </li>
        <li>
          <a href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</a>
        </li>
        <li>
          <a href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>Resume</a>
        </li>


      </ul>

      <ul className="navbar-icons">
        <li className="hvr-icon-grow-rotate"><a href="https://github.com/Oliviapark113" target="_blank"
          title="olivia's github">
          <i className="fab fa-github-square hvr-icon"></i>
        </a></li>
        <li className="hvr-icon-grow-rotate">
          <a href="https://www.linkedin.com/in/olivia-youngmee-park-74858651/" target="_blank"
            title="olivia's linkedin">
            <i className="fab fa-linkedin hvr-icon"></i></a>
        </li>
        <li className="hvr-icon-grow-rotate"><a href="mailto:oliviaypark113@gmail.com"
          title="oliviaypark113@gmail.com"><i className="fas fa-envelope hvr-icon "></i></a>
          </li>
        <li className="hvr-icon-grow-rotate">
          <a href="#resume" onClick={() => handlePageChange("Resume")}
            title="olivia's resume">
            <i className="fas fa-file hvr-icon"></i></a>
            </li>
      </ul>

    <div className="navbar-toggleBtn" onClick={toggleBtn}>
        <i className="fas fa-bars"></i>
    </div>
</nav>
     

  );
}

export default Navbar;
