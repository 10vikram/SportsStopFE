import React from "react";
import "./App.css"
import Image from "../images/noImage.bmp";

const Sport = () => {
    return(
        <div className="list">
            <div className="content">
                <div className="header" style={{color:"whitesmoke"}}>football</div>
                <img className="ui image" src={Image} width= "50px" height="50px" />
                <i className="trash alternate outline icon" style={{color:"whitesmoke"}}></i>
            </div>
        </div>
    );
}

export default Sport;