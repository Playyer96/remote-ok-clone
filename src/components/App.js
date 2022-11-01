import React from "react";

import JobCard from "./JobCard/JobCard";
import Footer from "./Footer/Footer";
import SearchBar from "./ShearchBar/SearchBar";
import JobData from "../Data.json";

import "./App.css";

let j = <JobCard />;

const RenderList = (props) => {
  const jobs = ["C++", "C#", "Ruby", "C", "Python"];

  return (
    <ul>
      {jobs.map((job) => (
        <li>
          {React.cloneElement(j, {
            CompanyLogo:
              "https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=100,height=100,quality=85/https://remoteOK.com/assets/safetywing.png?1586507930",
            JobTitle: job,
            Description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            CompanyName: "Optic Power",
            Location: "Worldwide",
            MinSalary: "60k",
            MaxSalary: "75k",
          })}
        </li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Remote | OK</h1>
        </div>
        <h3>find a remote job work from anywhere</h3>
        <SearchBar placeholder="engineer" data={JobData} />
      </header>
      <div>{RenderList()}</div>
      <Footer />
    </div>
  );
}

export default App;
