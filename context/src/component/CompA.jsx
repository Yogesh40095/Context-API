import React from "react";
import CompB from "./CompB";
const CompA = ({data})=>{
    return(
        
            <div className="compa">
            <h1>CompA: propdriling</h1>
            <CompB data={data} />
            </div>
            
            
        
    )
}
export default CompA;