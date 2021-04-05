import React from "react"

const Viewcode = ({href,title}) =>(
   
    <a href={href} target="_blank"
        title={title}>
        <button id="view-code">VIEW CODE</button>
    </a>
   
   )

export default Viewcode