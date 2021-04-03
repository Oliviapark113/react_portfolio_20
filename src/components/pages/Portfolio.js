import React from "react";
import "../css/portfolio.css";
// import "../../Portfolio photos/closet_full_img"
import demofullview from "../../demo/fullview.gif"
import closet_responsive_img from "../../Portfolio photos/closet_responsive_img.jpg"
import eatda_burger_demo from "../../demo/demo 2.gif"
import eatda_burger_responsive_img from "../../Portfolio photos/eatdaburger_responsive_img.jpg"
import note_taker_demo from "../../demo/demo3.gif"
import note_taker_responsive_img from "../../Portfolio photos/notetaker_responsive_img.jpg"
import employee_data_tracker_demo from "../../demo/demo4.gif"
import project7_fullscreen_img from "../../Portfolio photos/full video view.jpg"
import project7_responsive_img from "../../Portfolio photos/responsive_full_original.jpg"
import weather_dashboard_fullscreen_img from "../../Portfolio photos/wdfull view.jpg"
import weather_dashboard_responsive_img from "../../Portfolio photos/wdresponsive_full_original.jpg"
import realtime_dayPlanner_fullscreen_img from "../../Portfolio photos/scfull view.jpg"
import realtime_dayPlanner_responsive_img from "../../Portfolio photos/scresponsive_full_original.jpg"
import timed_quiz_fullscreen_img from "../../Portfolio photos/quizfull view.jpg"
import timed_quiz_responsive_img from "../../Portfolio photos/quizresponsive_full_original.jpg"



const Portfolio = () => (

  <div className="container">
  <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 portfolio-mainbox">
          <div className="row">
              <div className="col-lg-12 col-sm-12">
                  <h1 id="portfolio">Recent Project</h1>
              </div>
          </div>

          <div className="row">
              <h3 className="project-title">CODE CLOSET<br/><span id="service">Code </span>UNTIL YOU'RE COLD</h3>
              <div className="myphoto">
                  <div className="image-wrapper">
                      <div className="desk-image">
                          <img src={ demofullview } alt="code closet-2 full screen"
                              className="img-thumbnail img-fluid"/>
                      </div>
                      <div className="mobile-image">
                          <img src={closet_responsive_img } alt="code closet-2 responsive"
                              className="img-thumbnail img-fluid"/>
                      </div>
                  </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                  <p className="techniques">EXPRESS HANDLEBARS, CSS, BOOTSTRAP, JAVASCRIPT, EXPRESS, SEQUELIZE, NODE JS </p>
              </div>

              <div className="col-lg-12 col-sm-12 buttons">
                  <a href="https://stormy-stream-41757.herokuapp.com/" target="_blank"
                      title="code-closet SITE">
                      <button id="view-site">VIEW SITE</button>
                  </a>
                  <a href="https://github.com/Oliviapark113/CodeCloset-P2" target="_blank"
                      title="code-closet CODE">
                      <button id="view-code">VIEW CODE</button>
                  </a>
              </div>
          </div>

          <div className="row">
              <h3 className="project-title">Eat<br/><span id="service">DA </span>BURGERS</h3>
              <div className="myphoto">
                  <div className="image-wrapper">
                      <div className="desk-image">
                          <img src={eatda_burger_demo} alt="eat-da burger full screen"
                              className="img-thumbnail img-fluid"/>
                      </div>
                      <div className="mobile-image">
                          <img src={eatda_burger_responsive_img} alt="eat-da burger responsive"
                              className="img-thumbnail img-fluid"/>
                      </div>
                  </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                  <p className="techniques">EXPRESS HANDLEBARS, CSS, BOOTSTRAP, JAVASCRIPT, EXPRESS, MYSQL, NODE JS </p>
              </div>

              <div className="col-lg-12 col-sm-12 buttons">
                  <a href="https://evening-castle-79713.herokuapp.com/" target="_blank"
                      title="eat-da burger SITE">
                      <button id="view-site">VIEW SITE</button>
                  </a>
                  <a href="https://github.com/Oliviapark113/burgerapp_13" target="_blank"
                      title="eat-da burger CODE">
                      <button id="view-code">VIEW CODE</button>
                  </a>
              </div>
          </div>


          <div className="row">
              <h3 className="project-title">NOTE<br/><span id="service">Daily </span>TAKER</h3>
              <div className="myphoto">
                  <div className="image-wrapper">
                      <div className="desk-image">
                          <img src={note_taker_demo} alt="note taker full screen"
                              className="img-thumbnail img-fluid"/>
                      </div>
                      <div className="mobile-image">
                          <img src={note_taker_responsive_img} alt="note-taker responsive"
                              className="img-thumbnail img-fluid"/>
                      </div>
                  </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                  <p className="techniques">HTML, CSS, JAVASCRIPT, EXPRESS, NODE JS, NPM UNIQUID</p>
              </div>

              <div className="col-lg-12 col-sm-12 buttons">
                  <a href="https://sheltered-falls-35987.herokuapp.com/" target="_blank"
                      title="note-taker SITE">
                      <button id="view-site">VIEW SITE</button>
                  </a>
                  <a href="https://github.com/Oliviapark113/note_taker_11" target="_blank"
                      title="note-taker CODE">
                      <button id="view-code">VIEW CODE</button>
                  </a>
              </div>
          </div>



          <div className="row">
              <div className="col-lg-12">
                  <h3 className="project-title">EMPLOYEE<br/><span id="service">Data </span>TRACKER</h3>
              </div>
          
              <div className="col-lg-12 notetaker">
                  <div className="notetaker-img">
                      <img src={employee_data_tracker_demo} alt="note taker full screen" className=" img-thumbnail img-fluid"/>
                  </div>
              </div>    
          
              <div className="col-lg-12 col-sm-12">
                  <p className="techniques"> JAVASCRIPT, MYSQL, NODE JS, NPM INQUIRER</p>
              </div>
          
              <div className="col-lg-12 col-sm-12 buttons">
          
                  <a href="https://github.com/Oliviapark113/employee_tracker_12" target="_blank" title="employee-tracker CODE">
                      <button id="view-code">VIEW CODE</button>
                  </a>
              </div>
          </div>


          <div className="row">
              <h3 className="project-title">WEATHER OR NOT<br/><span id="service">Love </span> MUSIC & MOVIES</h3>
              <div className="myphoto">
                  <div className="image-wrapper">
                      <div className="desk-image">
                          <img src={project7_fullscreen_img} alt="project7 full screen"
                              className="img-thumbnail img-fluid"/>
                      </div>
                      <div className="mobile-image">
                          <img src={project7_responsive_img} alt="project7 responsive"
                              className="img-thumbnail img-fluid"/>
                      </div>
                  </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                  <p className="techniques">HTML, CSS, JAVASCRIPT, JQUERY,API</p>
              </div>

              <div className="col-lg-12 col-sm-12 buttons">
                  <a href="https://oliviapark113.github.io/project7_group-1/" target="_blank"
                      title="ragingmongooes SITE">
                      <button id="view-site">VIEW SITE</button>
                  </a>
                  <a href="https://github.com/Oliviapark113/project7_group-1" target="_blank"
                      title="ragingmongooes CODE">
                      <button id="view-code">VIEW CODE</button>
                  </a>
              </div>
          </div>


          <div className="row">
              <h3 className="project-title">WEATHER<br/><span id="service">Dashboard </span></h3>
              <div className="myphoto">
                  <div className="image-wrapper">
                      <div className="desk-image">
                          <img src={weather_dashboard_fullscreen_img} alt="weather_dashboard_06 full screen"
                              className="img-thumbnail img-fluid"/>
                      </div>
                      <div className="mobile-image">
                          <img src={weather_dashboard_responsive_img}
                              alt="weather_dashboard_06 responsive" className="img-thumbnail img-fluid"/>
                      </div>
                  </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                  <p className="techniques">HTML, CSS, JAVASCRIPT, JQUERY,API</p>
              </div>

              <div className="col-lg-12 col-sm-12 buttons">
                  <a href="https://oliviapark113.github.io/weather_dashboard_06/" target="_blank"
                      title="weather_dashboard_06 SITE">
                      <button id="view-site">VIEW SITE</button>
                  </a>
                  <a href="https://github.com/Oliviapark113/weather_dashboard_06" target="_blank"
                      title="weather_dashboard_06 CODE">
                      <button id="view-code">VIEW CODE</button>
                  </a>
              </div>
          </div>
          
          <div className="row">
              <h3 className="project-title">DAILY<br/><span id="service">Real Time </span>SCHEDULER</h3>
              <div className="myphoto">
                  <div className="image-wrapper">
                      <div className="desk-image">
                          <img src={realtime_dayPlanner_fullscreen_img} alt="realtime_dayPlanner_05 full screen"
                              className="img-thumbnail img-fluid"/>
                      </div>
                      <div className="mobile-image">
                          <img src={realtime_dayPlanner_responsive_img}
                              alt="realtime_dayPlanner_05 responsive" className="img-thumbnail img-fluid"/>
                      </div>
                  </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                  <p className="techniques">HTML, CSS, JAVASCRIPT, JQUERY</p>
              </div>

              <div className="col-lg-12 col-sm-12 buttons">
                  <a href="https://oliviapark113.github.io/realtime_dayPlanner_5/" target="_blank"
                      title="realtime_dayPlanner_05 SITE">
                      <button id="view-site">VIEW SITE</button>
                  </a>
                  <a href="https://github.com/Oliviapark113/realtime_dayPlanner_5" target="_blank"
                      title="realtime_dayPlanner_05 CODE">
                      <button id="view-code">VIEW CODE</button>
                  </a>
              </div>
          </div>

          <div className="row">
              <h3 className="project-title">LET'S PLAY<br/><span id="service">Timed </span>QUIZ</h3>
              <div className="myphoto">
                  <div className="image-wrapper">
                      <div className="desk-image">
                          <img src={timed_quiz_fullscreen_img } alt="timed_quiz_04 full screen"
                              className="img-thumbnail img-fluid"/>
                      </div>
                      <div className="mobile-image">
                          <img src={timed_quiz_responsive_img}
                              alt="times_quiz_04 responsive" className="img-thumbnail img-fluid"/>
                      </div>
                  </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                  <p className="techniques">HTML, CSS, JAVASCRIPT</p>
              </div>

              <div className="col-lg-12 col-sm-12 buttons">
                  <a href="https://oliviapark113.github.io/timed_quiz_box_4/" target="_blank"
                      title="timed_quiz_box_4 SITE">
                      <button id="view-site">VIEW SITE</button>
                  </a>
                  <a href="https://github.com/Oliviapark113/timed_quiz_box_4" target="_blank"
                      title="timed_quiz_box_4 CODE">
                      <button id="view-code">VIEW CODE</button>
                  </a>
              </div>
          </div>

      </div>
  </div>
</div>

);

export default Portfolio ;
