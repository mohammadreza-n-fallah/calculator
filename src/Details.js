import React from "react"
import { ReactDOM } from "react-dom"


const list=(props)=>{
    return(
        <div className="container">
      <ul >
        <div>{props.family}</div>
        <li>ali</li>
        <li>reza</li>
        <li>hasan</li>
        <li>sina</li>
      </ul>
    </div>
    )
    }
    export default list;