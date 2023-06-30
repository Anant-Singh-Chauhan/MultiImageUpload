import React from "react";
import "./Count.css";

// Expected Component Use: serves a 'Count' label to the DOM, which displays the no. of image objects in the 'image' state.
// Last Modified By: Anant Singh Chauhan
// Last Modify Date: Jun 30,2023

export default function Count(props) {
    
    return (
      <div id="div_Count" className="btn btn-success" disabled>
        <label className="">Count: <span>{props.len}</span> </label>
      </div>
    );
}