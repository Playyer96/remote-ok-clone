import React, { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "./JobCard.css";

const JobCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card" onClick={() => setIsOpen(!isOpen)}>
      <td className="company-logo">
        <img src={props.CompanyLogo} width="100" alt="" />
      </td>
      <div className="job-card">
        <h1>{props.JobTitle}</h1>
        <h3>{props.CompanyName}</h3>
        <td>
          <li className="detail-list">
            <a href="#Test">{props.Location}</a>
            <a href="#Test">
              {props.MinSalary} - {props.MaxSalary}
            </a>
          </li>
        </td>
        <td className="tags">
          <a>Developer</a>
          <a>Javascript</a>
          <a>Typescript</a>
        </td>
        <td className="time">
          <time datetime="">
            <CalendarTodayIcon/>
            10d
          </time>
          <button
            className="apply-button"
            onClick={() => console.log("You just apply!")}
          >
            Apply
          </button>
        </td>
        {isOpen && (
          <div className="job-details">
            <p>{props.Description}</p>
            <div className="company-profile">
              <img src={props.CompanyLogo} width="100" alt="" />
              <h1>{props.CompanyName}</h1>
              <h4>{props.CompanyWeb}</h4>
              <button>Apply now</button>
              <span>Views</span>
              <span>People that applied</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
