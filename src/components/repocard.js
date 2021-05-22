import { RepoIcon } from '@primer/octicons-react';

const RepoCard = ({ repo }) => {
  return (
    <div className="col">
      <div className="card bg-secondary mb-3 cardrepo">
        <div className="card-header">
          <RepoIcon verticalAlign="middle"/> &nbsp;
          <a className="text-white repo-url fs-6" href={repo.html_url}><strong>{repo.name}</strong></a>
        </div>
        <div className="card-body">
          <h5 className="card-title">
          <a className="text-white repo-url fs-6" href={repo.html_url}>{repo.full_name}</a>
          </h5>
          <p className="card-text fs-6">{repo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;