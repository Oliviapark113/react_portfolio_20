import React from "react"


const Form = () =>(
    <form action="https://formspree.io/f/oliviaypark113@gmail.com" className="form">

    <label>Name:</label>
    <input className="input hvr-grow" type="name" name="name" />
    <label>Email:</label>
    <input className="input hvr-grow" type="email" name="email" />
    <br />
    <label>Message:</label>
    <input className="input hvr-grow" type="message" name="message" />

  </form>
   )

export default Form