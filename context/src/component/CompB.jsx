import React from "react";
import CompC from "./CompC";
const CompB = ({data})=>{
    return(
    
        <div className="compb">
            <h1> compb:propdriling</h1>
            <CompC data={data} />
           
        </div>
        
        
    )
}
export default CompB;