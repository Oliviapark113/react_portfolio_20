import React from "react";
import "../../css/resume.css";
import "../../css/style.css";
import "../ResumePage/myAdress"
import MyAdress from "../ResumePage/myAdress";
import Summary from "../ResumePage/summary";
import Project from "../ResumePage/project";
import Experience from "../ResumePage/experience";
import Education from "../ResumePage/education";
import Skills from "../ResumePage/skills";




const ResumeContents = () => (
    <>
        <h1 className="resume-name">OLIVIA(YOUNGMEE) PARK </h1>
        <div className="resume-row">
            <MyAdress />
        </div>
        <h3>SUMMARY</h3>
        <div className="resume-row">
            <Summary />
        </div>
        <h3>TECHNICAL SKILLS</h3>
        <div className="resume-row">
            <Skills />
        </div>
        <h3>PROJECTS</h3>
        <div className="resume-row project-row">
            <Project />
        </div>
        <h3>WORK EXPERIENCE</h3>
        <div className="resume-row">
            <Experience />
        </div>

        <h3>EDUCATION</h3>
        <div className="education-row">
            <Education />
        </div>
    </>
)

export default ResumeContents