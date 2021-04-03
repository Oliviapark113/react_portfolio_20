import React from "react";
import "../css/portfolio.css"
import Container from "../pagesComponents/Container"
import Portfolio_Data from "../../utils/Portfolio_data"


const Portfoilio_ = () => (

    <Container>
      <div className="col-lg-12 col-md-12 col-sm-12 Portfoilio_-mainbox">
          <div className="row">
              <div className="col-lg-12 col-sm-12">
                  <h1 id="Portfoilio_">Recent Project</h1>
              </div>
          </div>

          {Portfolio_Data.map(data=>{
              console.log(data)
              return(

                  <div className="row">
                      <h3 className="project-title">{data.projectTitleh3}<span id="service">{data.span} </span></h3>
                      <div className="myphoto">
                          <div className="image-wrapper">
                              <div className="desk-image">
                                  <img src={data.image1} alt={data.projectTitleh3}
                                      className="img-thumbnail img-fluid" />
                              </div>
                              <div className="mobile-image">
                                  <img src={data.image2} alt={data.projectTitleh3}
                                      className="img-thumbnail img-fluid" />
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-12 col-sm-12">
                          <p className="techniques">{data.techniques} </p>
                      </div>

                      <div className="col-lg-12 col-sm-12 buttons">
                          <a href={data.viewSite} target="_blank"
                              title={data.projectTitleh3}>
                              <button id="view-site">VIEW SITE</button>
                          </a>
                          <a href={data.viewCode} target="_blank"
                              title={data.projectTitleh3}>
                              <button id="view-code">VIEW CODE</button>
                          </a>
                      </div>
                  </div>

              )
          })}

      </div>
      </Container>


);

export default Portfoilio_ ;
