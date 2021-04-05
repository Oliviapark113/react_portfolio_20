import React from "react"

const Viewsite = ({href,title}) =>(
   
    <a href={href} target="_blank"
        title={title}>
        <button id="view-site">VIEW SITE</button>
    </a>
   
   )

export default Viewsite