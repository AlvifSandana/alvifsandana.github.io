import React from 'react';


function Navbar() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark nav">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-white">ASM</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/posts">Posts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cv">CV</a>
              </li>
            </ul>
          </div>          
        </div>
      </nav>
    );
}

export default Navbar;