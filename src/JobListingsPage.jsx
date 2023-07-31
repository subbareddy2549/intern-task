

import React from 'react';
import { Link } from 'react-router-dom';

const JobListingsPage = ({ job }) => {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
      <Link to={`/jobs/${job.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default JobListingsPage;
