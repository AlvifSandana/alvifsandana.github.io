import React from 'react';
import baseURL from '../api/Github';
import RepoCard from './repocard';
import Axios from 'axios';

class GithubCards extends React.Component {
  state = {
    repo: []
  };

  async componentDidMount() {
    // const apikey = process.env.REACT_APP_APIKEY;
    let repo = [
      baseURL('rsid-backend'),
      baseURL('xorencryption'),
      baseURL('alvifsandana.github.io'),
      baseURL('mt7601u'),
      baseURL('readline-nodejs'),
      baseURL('keuangan-stikom'),
    ];

    repo.map(
      async (url) => 
        await Axios.get(url).then(async (res) => {
          this.setState({
            repo: [...this.state.repo, res.data],
          })
        })
    )
    
  }

  render() {
    return(
      <div className="row row-cols-1 row-cols-md-2 g-4 card-container">
        {this.state.repo.map((data, i) => (
          <RepoCard repo={data} key={i}/>
        ))}
      </div>
    );
  }

}

export default GithubCards;
