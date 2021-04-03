import React from "react";
import "../css/style.css";
import "../css/navbar.css";
import my_mono_profile_img from "../../Portfolio_photos/MONO 1_1.jpg"
import Container from "../pagesComponents/Container"

const About = () => (
  <Container>
      <div className="col-lg-12 mainbox">
        
        <div className="row">
          <div className="col-lg-12">
            <h1>About Me</h1>
            <p>Olivia,Youngmee, <span id="lastName">Park</span></p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 img column">
            <img src={my_mono_profile_img} alt="MyMono 1"
              className="AboutmeImage rounded-circle  shadow  bg-white rounded img-fluid" />
          </div>
          <div className="col-lg-8 myBio1">
            My name is Olivia Park.<br />
                I am a passionate coder and love challenge myself creatively.<br />
                  With a fashion desginer background, using designer aesthetic to create stylish website with
                  whimscal twist.
                  <br />

                    I am an innovative and collaborative full-stack web developer
                    with problem solving skill and seeking for new opportunities in software engineer career.
              </div>
        </div>

        <div className="row">
          <div className="col-lg-12 myBio2">
            <div className="col-lg-6 skill-box">
              <i className="fas fa-chalkboard-teacher skill"></i>

              <ul className="skill-list">
                <li className="skill-header">TECHNICAL SKILLS</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript/JQuery</li>
                <li>API</li>
                <li>NODE.JS</li>
                <li>EXPRESS.JS</li>
                <li>MY SQL/SEQUELIZE</li>
                <li>MONGO DB</li>

              </ul>
            </div>
            <div className="col-lg-6 skill-box">
              <i className="fas fa-broadcast-tower other"></i>
              <ul className="skill-list">
                <li className="skill-header">OTHER SKILLS</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Microsoft Powerpoint</li>
                <li>Microsoft Excell</li>

              </ul>
            </div>


          </div>

        </div>
      </div>
 
  </Container>

);

export default About;