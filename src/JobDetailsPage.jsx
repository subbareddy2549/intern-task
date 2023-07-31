
import React from 'react';
import JobListingsPage from './JobListingsPage';

const jobListings = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCo Inc.',
    location: 'New York, USA',
    description: 'We are looking for a skilled Frontend Developer...',
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'CodeTech Ltd.',
    location: 'San Francisco, USA',
    description: 'CodeTech is seeking an experienced Backend Developer...',
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'WebWizards LLC',
    location: 'Seattle, USA',
    description: 'WebWizards is hiring a talented Full Stack Developer...',
  },
  {
    id: 4,
    title: 'UX/UI Designer',
    company: 'DesignPro Solutions',
    location: 'London, UK',
    description: 'DesignPro Solutions needs a creative UX/UI Designer...',
  },
  {
    id: 5,
    title: 'Data Scientist',
    company: 'DataTech Industries',
    location: 'Berlin, Germany',
    description: 'DataTech is looking for a skilled Data Scientist...',
  },
  {
    id: 6,
    title: 'Mobile App Developer',
    company: 'AppGenius',
    location: 'Toronto, Canada',
    description: 'AppGenius is seeking a talented Mobile App Developer...',
  },
  {
    id: 7,
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Singapore',
    description: 'InnovateTech is hiring an experienced Product Manager...',
  },
  
];

const JobDetailsPage = () => {
  return (
    <div className="job-list">
      <h2>Job Listings</h2>
      <div className="job-cards">
        {jobListings.map((job) => (
          <JobListingsPage key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobDetailsPage;
