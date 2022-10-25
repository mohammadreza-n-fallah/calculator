import React from "react";
const find=(eror,month)=>{
    if(month>6){
         return <div>winter</div>
    }else{
       return <div>summer</div>
    }
}
const sea=(props)=>{
    const seas=find(props.eror,new Date().getMonth() )
    return(
        <div>{seas}</div>
       
    )
}
export default sea;