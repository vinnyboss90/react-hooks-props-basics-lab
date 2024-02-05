import React from "react";
import Links from "./Links.js"
function About(props) {
  if(!props.bio || props.bio.trim() === "") {
    return null;
  }


  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links
      github = {props.github}
      linkedin = {props.linkedin}

      />
    </div>
  );
}

export default About;
