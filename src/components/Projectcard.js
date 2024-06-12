import "./ProjectCardstyles.css";

import React from 'react'
import {NavLink} from "react-router-dom";
import mal_img1 from "../assets/mal_img1.jpg";

const Projectcard = (props) => {
  return (
    <div className="project-card">
                 <img src ={props.imgsrc} alt="image"></img>
                 <h2 className="project-title"> {props.title}</h2>
                 <div className="pro-details">
                  <p>{props.text}</p>
                  <div className="pro-btns"> 
                    <NavLink to={props.view} className="btn" target="_blank">Github</NavLink>
                  </div>
                 </div>
            </div>
  )
}

export default Projectcard
