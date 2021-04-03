import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

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
  };


    return (
      <div>
        <Navbar
          currentPage={state.currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
        <Footer/>
      </div>
    );
  
}

export default PortfolioContainer;
