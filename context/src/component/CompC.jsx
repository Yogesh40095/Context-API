import React,{useContext} from "react";
import { AppState } from "../App";
const CompC = ({data})=>{

    const appData = useContext(AppState)
    return(
        
        <div className="compc">
            <h1> compc:propdriling</h1>
            <h1> {data} </h1>
            <h2> {appData.data} </h2>
            <h2> {appData.name.name} </h2>
            <h2> {appData.name.age} </h2>
        </div>
       
        
    )
}
export default CompC;