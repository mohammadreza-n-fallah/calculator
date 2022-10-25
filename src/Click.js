import React from "react";
import { ReactDOM } from "react";
const dokme=(props)=>{
    return(
        <>
        <button>on</button>
        {props.children}
        <button>off</button>
       
        </>
    )
}
export default dokme;