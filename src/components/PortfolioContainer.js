import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Container from "./pagesComponents/Container";
import Resume from "./pages/Resume";

 const PortfolioContainer = ()=> {

const [state, setState] = useState({
  currentPage: "About"
})
  

const handlePageChange = page => {
    setState({ currentPage: page });
  };

 const renderPage = () => {
    if (state.currentPage === "About") {
      return <About />;
    } else if (state.currentPage === "Contact") {
      return <Contact />;
    } else if(state.currentPage === "Portfolio"){
      return <Portfolio />;
    } 
    else if(state.currentPage === "Resume"){
      return <Resume />;
    } 

    
  };

 

  const toggleBtn  = ()=> {
    const list = document.querySelector(".navbar-list");
    const icons = document.querySelector(".navbar-icons");
      list.classList.toggle("active");
      icons.classList.toggle("active");
    
  }


    return (
      <>
        <Navbar
          currentPage={state.currentPage}
          handlePageChange={handlePageChange}
          toggleBtn = {toggleBtn}
        />
        <Container> 
        {renderPage()}
        </Container>
        <Footer/>
        </>
     
    );
  
}

export default PortfolioContainer;
