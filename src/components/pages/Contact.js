import React from "react";
import "../css/style.css";


const Contact = () => (

  <div className="container">
    <div className="row" style={{marginBottom :350 ,marginTop: 150}}>
      <div className="col-lg-10 col-md-10 col-sm-10 contact-mainbox">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h1>Contact</h1>
            <p id="contact-info">Please leave your contact info below.</p>
            <form action="https://formspree.io/f/oliviaypark113@gmail.com" className="form">

              <label>Name:</label>
              <input className="input hvr-grow" type="name" name="name" />
              <label>Email:</label>
              <input className="input hvr-grow" type="email" name="email" />
              <br/>
                <label>Message:</label>
                <input className="input hvr-grow" type="message" name="message" />

            </form>
              </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <button type="submit" className="submit hvr-grow">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
 
);

export default Contact;