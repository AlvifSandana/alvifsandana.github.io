import React from "react";
import Typist from "react-typist";
import ReactRoundedImage from "react-rounded-image";
import myimg from "../image.webp";
import config from "../config.json";
import '../App.css';

function Home(){
    return (
      <div className="App">
        <header className="App-header">
          <ReactRoundedImage
            image={myimg}
            roundedColor="#ffffff"
            roudedSize="13"
          />
          <br />
          <p>
            <h1 className="myname">{config.fullname}</h1>
            <Typist>{config.description}</Typist>
          </p>
          <div className="icons-social">
            {config.icons.map((icon, i) => (
              <a
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                href={`${icon.url}`}
              >
                <i className={`fab ${icon.img}`}></i>
              </a>
            ))}
          </div>
        </header>
      </div>
    );
}

export default Home;
