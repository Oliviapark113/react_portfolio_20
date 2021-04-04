import React from "react";
import "../css/style.css";
import "../css/navbar.css";
import my_mono_profile_img from "../../Portfolio_photos/MONO 1_1.jpg"
import Container from "../pagesComponents/Container"
import Mainbox from "../pagesComponents/AboutPage/mainbox"
import Namerow from "../pagesComponents/AboutPage/namerow"
import Biorow from "../pagesComponents/AboutPage/biorow"
import SkillBox from "../pagesComponents/AboutPage/skillbox";
import Skillset from "../pagesComponents/AboutPage/skillset";
import Otherskillset from "../pagesComponents/AboutPage/otherskillset";
import Biobox from "../pagesComponents/AboutPage/biobox"

const About = () => (
  <Container>
    <Mainbox>
      <Namerow />
      <Biorow />
      <div className="row">
        <Biobox>
          <SkillBox>
            <Skillset />
          </SkillBox>

          <SkillBox>
            <Otherskillset />
          </SkillBox>
        </Biobox>
      </div>
    </Mainbox>
  </Container>

);

export default About;