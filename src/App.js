import React from "react";

import JobCard from "./components/JobCard";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import { useFetchJobs } from "./hooks";


import "./App.css";

function App() {
  const [job, tags, loading, selectedJobs, setSelectedJobs] = useFetchJobs();

  function selectedFiltersHandler(filters) {
    if (!filters.length) {
      setSelectedJobs(job);
      return;
    }

    const selectedJobs = job.filter((job) => {
      const isInTags = (filter) => job.tags.includes(filter);
      return filters.every(isInTags);
    });
    setSelectedJobs(selectedJobs);
  }

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      {/* return ( */}
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Remote | OK</h1>
          </div>
          <h3>find a remote job work from anywhere</h3>
        </header>
        <div className="searchbar">
          <SearchBar
            tags={tags}
            selectedFiltersHandler={selectedFiltersHandler}
          />
        </div>
        <div className="job-cards">
          {selectedJobs.map((job, key) => (
            <JobCard
              key={key}
              title={job.position}
              tags={job.tags}
              company_logo={job.company_logo}
              company={job.company}
              salary_min={job.salary_min}
              salary_max={job.salary_max}
              location={job.location}
            />
          ))}
          );
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
