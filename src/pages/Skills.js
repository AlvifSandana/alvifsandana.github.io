import React from 'react';
import config from '../config.json';

class Skills extends React.Component {
  render() {
    return (
      <div className="skill">
        <h1>My Skills</h1>
        <div className="row skill-item">
          {
            config.skills.map(
              skill => (
                <div key={skill.type} className="col-sm col-xm-6 text-center">
                  <span className={"fab fa-" + skill.type}></span>
                  <p>{skill.name}</p>
                </div>
              )
            )
          }
        </div>
      </div>
    );
  }
}

export default Skills;