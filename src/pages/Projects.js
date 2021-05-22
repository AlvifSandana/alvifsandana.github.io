import React from 'react';
import GithubCards from '../components/githubcards';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1 className="text-center">Projects</h1>
        <GithubCards />
      </div>
    );
  }
}



export default Projects;