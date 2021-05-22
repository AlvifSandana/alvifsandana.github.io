import React from "react";
import Typist from "react-typist";
import config from "../config.json";
import '../App.css';

function Home(){
    return (
      <div className="App">
        <header className="App-header">

            <h1 className="myname">{config.fullname}</h1>
            <Typist>
              <span>{config.description}</span>
            </Typist>

          <div className="icons-social">
            {config.icons.map((icon, i) => (
              <a
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                href={`${icon.url}`}
              >
                <i className={`${icon.img}`}></i>
              </a>
            ))}
          </div>
        </header>
      </div>
    );
}

export default Home;
