import { RepoIcon } from '@primer/octicons-react';

const RepoCard = ({ repo }) => {
  return (
    <div className="col">
      <div className="card bg-secondary mb-3 cardrepo">
        <div className="card-body">
          <h5 className="card-title">
            <p className="d-none d-sm-inline-block fs-5">
              <RepoIcon verticalAlign="middle" /> <a className="text-white repo-url" href={repo.html_url}>{repo.full_name}</a>
            </p>
          </h5>
          <p className="card-text fs-6">{repo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;