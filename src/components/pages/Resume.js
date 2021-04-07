import React from "react";
import "../css/resume.css";
import "../css/style.css";
import "../pagesComponents/ResumePage/container"
import Container from "../pagesComponents/ResumePage/container";
import Row from "../pagesComponents/ResumePage/row"
import Mainbox from "../pagesComponents/ResumePage/mainbox";
import myResumeImg1 from "../../Portfolio_photos/olivia resume-01.jpg"
import myResumeImg2 from "../../Portfolio_photos/olivia resume-02.jpg"
const Resume = () => (
   <Container>
     <Row>
        <Mainbox>
         <img src={myResumeImg1} className="resumeImage1" alt="temporary resume image 1 of 2"/>
         <img src={myResumeImg2} className="resumeImage1" alt="temporary resume image 2 of 2 "/>
        </Mainbox>
     </Row>
   </Container>
)

export default Resume