import "./Heroimgstyles.css"   ;

import React from 'react'
import background_home from "../assets/background_home.jpg";
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={background_home} alt="BackGroundImage" />
        </div>
        <div className="content">
            <p>Hi, I am Sajal Jaiswal</p>
            <h1>Software Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects
                </Link>
                <Link to="/contact" className="btn btn-light">Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg
