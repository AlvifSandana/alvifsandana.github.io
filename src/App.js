import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./pages/About";
import CurriculumVitae from "./pages/CurriculumVitae";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
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
                <Link className="nav-link" to="/posts">Posts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cv">CV</Link>
              </li>
            </ul>
          </div>          
        </div>
      </nav>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/posts">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/cv">
            <CurriculumVitae />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
