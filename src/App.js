import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

import About from "./pages/About";
import config from './config.json';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
require('dotenv').config();

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      {/* Navbar */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark nav">
        <div className="container-fluid">
          <Link className="navbar-brand mb-0 h1 text-white" to="/">ASM</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">Skills</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={config.resume}>Resume</a>
              </li>
            </ul>
          </div>          
        </div>
      </nav>
      <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
