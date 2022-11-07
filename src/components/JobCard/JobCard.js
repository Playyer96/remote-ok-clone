import React, { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Colors } from "../Constants";

import "./JobCard.css";

// export default class JobCard extends React.Component {
//   render () {
//     return (
//       <div className="job">
//         <p>{this.props.title} [{ this.props.tags.join(', ') }]</p>
//       </div>
//     )
//   }
// }

export default class JobCard extends React.Component {
  // const JobCard = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  state = {
    bgColor: Colors,
  };

  componentDidMount() {
    this._getRandomColor();
  }

  _getRandomColor() {
    const item =
      this.state.bgColor[Math.floor(Math.random() * this.state.bgColor.length)];
    this.setState({
      selectedColor: item,
    });
  }

  render() {
    return (
      // <div className="card" onClick={() => setIsOpen(!isOpen)}>
      <div
        className="card"
        style={{
          backgroundColor: this.state.selectedColor,
        }}
      >
        <td className="company-logo">
          <img src={this.props.company_logo} width="100" alt="" />
        </td>
        <div className="job-card">
          <h1>{this.props.title}</h1>
          <h3>{this.props.company}</h3>
          <p>{this.props.tags.join(", ")}</p>
          <td>
            <li className="detail-list">
              <a data-tooltip="Add  to filters" href="#Test">
                {this.props.Location}
              </a>
              <a href="#Test">
                💰${this.props.salary_min} - ${this.props.salary_max}
              </a>
              <a href="#test">{this.props.location}</a>
            </li>
          </td>
          <td className="tags">
            <a>Developer</a>
            <a>Javascript</a>
            <a>Typescript</a>
          </td>
          <td className="time">
            <time datetime="">
              <CalendarTodayIcon />
              10d
            </time>
            <button
              className="apply-button"
              onClick={() => console.log("You just apply!")}
            >
              Apply
            </button>
          </td>
        </div>
      </div>
    );
  }
}

// export default JobCard

// {isOpen && (
//   <div className="job-details">
//     <p>{props.Description}</p>
//     <div className="company-profile">
//       <img src={props.CompanyLogo} width="100" alt="" />
//       <h1>{props.CompanyName}</h1>
//       <h4>{props.CompanyWeb}</h4>
//       <button>Apply now</button>
//       <span>Views</span>
//       <span>People that applied</span>
//     </div>
//   </div>
// )}
