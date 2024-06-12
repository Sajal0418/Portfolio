import "./Footerstyles.css";

import React from 'react';
import { FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={
                        {color:"#fff",marginRight:"2rem"}
                    }/>
                    <div>
                        <p>
                            Test address
                        </p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                <FaPhone size={20} style={
                        {color:"#fff",marginRight:"2rem"}
                    }/>1234567890
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={
                        {color:"#fff",marginRight:"2rem"}
                    }/>test@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                    <h4>
                        About Me
                    </h4>
                    <p>Hello test text over here will add the original text later</p>
                    <div className="social">
                    <FaFacebook size={30} style={
                        {color:"#fff",marginRight:"1rem"}
                    }/>
                    <FaTwitter size={20} style={
                        {color:"#fff",marginRight:"2rem"}
                    }/>
                    <FaLinkedin size={20} style={
                        {color:"#fff",marginRight:"2rem"}
                    }/>
                    </div>   
            </div>
        </div>
      
    </div>
  )
}

export default Footer
