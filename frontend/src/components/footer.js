import "./Footerstyles.css";

import React from 'react';
import {  FaHome,FaLinkedin,FaMailBulk,FaPhone } from "react-icons/fa";
import {SiLeetcode } from "react-icons/si";
import { AiFillGithub } from 'react-icons/ai';

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
                            Banglore
                        </p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                <FaPhone size={20} style={
                        {color:"#fff",marginRight:"2rem"}
                    }/>7020336540
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={
                        {color:"#fff",marginRight:"2rem"}
                    }/>sajaljaisw9@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                    <h4>
                        About Me
                    </h4>
                    <p>I am currently a student and I will graduate in 2025.</p>
                    <div className="social">
                    <a href="https://leetcode.com/u/jaiswalsajal9/" target="_blank" className="leetcode">    
                    <SiLeetcode size={30}  className="leetcode"style={
                        {marginRight:"2rem"}
                    }/></a>
                    <a href="https://github.com/Sajal0418" target="_blank" className="Github"> 
                    <AiFillGithub size={30} className="github" style={
                        {color:"#fff",marginRight:"2rem"}
                    }/></a>
                    <a href="https://www.linkedin.com/in/jaiswalsajal9/" target="_blank" className="Linkedin">
                    <FaLinkedin size={30} className="linkedin" style={
                        {marginRight:"2rem"}
                    }/></a>
                    </div>   
            </div>
        </div>
      
    </div>
  )
}

export default Footer
