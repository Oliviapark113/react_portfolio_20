import React from "react"
import my_mono_profile_img from "../../../Portfolio_photos/MONO 1_1.jpg"


const Biorow = () =>(
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
)

export default Biorow