import React from "react";
import myImg from "../me.jpg";
import ReactRoundedImage from "react-rounded-image";
import config from "../config.json";
import "../App.css";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <ReactRoundedImage
          image={myImg}
          roundedColor="#ffffff"
          roundedSize="10"
        />
        <br />
        <h1>About Me</h1>
        <p className="About-text">{config.about}</p>
      </div>
    );
  }
}

export default About;
