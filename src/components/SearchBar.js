import React, { useState } from "react";
import "../styles/SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export default class SearchBar extends React.Component {
  // this.props.tags as string[]

  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchResults: [],
      filters: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  log(text, data = "") {
    const prefix = "[search]";
    console.log(`${prefix} ${text}`, data);
  }

  handleChange(event) {
    const searchText = event.target.value;
    const searchResults = searchText.length
      ? this.props.tags.filter((tag) => tag.includes(searchText))
      : [];
    this.setState({ searchText, searchResults });
    this.log("searchText changed to ", searchText);
  }

  handleKeyDown(event) {
    const key = event.key;
    if (key === "Enter") {
      const results = this.state.searchResults;
      const filterToSet = results.length ? results[0] : null;
      const validFilterAddition =
        filterToSet && !this.state.filters.includes(filterToSet);
      if (validFilterAddition) {
        this.log("set filter: ", filterToSet);
        const filters = [...this.state.filters, filterToSet];
        this.setState({
          filters: filters,
          searchText: "",
          searchResults: [],
        });
        this.props.selectedFiltersHandler(filters);
      }
    } else if (key === "Backspace") {
      const text = this.state.searchText;
      if (!text.length && this.state.filters.length) {
        const filters = this.state.filters.slice(0, -1);
        this.setState((state) => ({
          filters,
          searchText: state.filters
            .slice(-1)[0]
            .split("")
            .slice(0, -1)
            .join(""),
        }));
        this.props.selectedFiltersHandler(filters);
      }
    }
  }

  render() {
    return (
      <div className="search">
        <div className="search-input">
          {/* <label>Search: </label> */}
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.searchText}
            onKeyDown={this.handleKeyDown}
          />
          <div className="searchIcon">
            <SearchIcon />
            {/* {filteredData.length === 0 ? (
            <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={ClearInput} />
            )} */}
          </div>
        </div>
        <div className="search-results">
          <ul>
            {this.state.searchResults.map((tag, key) => (
              <li key={key}>{tag}</li>
            ))}
          </ul>
          <div className="applied-filters">
            <ul>
              {this.state.filters.map((filter, key) => (
                <li key={key}>{filter}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// function SearchBar({ placeholder, data }) {
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = data.filter((value) => {
//       return value.title.toLowerCase().includes(searchWord.toLowerCase());
//     });
//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   const ClearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };

//   return (
//     <div className="search">
//       <div className="searchInputs">
//         <input
//           type="text"
//           placeholder={placeholder}
//           value={wordEntered}
//           onChange={handleFilter}
//         />
//         <div className="searchIcon">
//           {filteredData.length === 0 ? (
//             <SearchIcon />
//           ) : (
//             <CloseIcon id="clearBtn" onClick={ClearInput} />
//           )}
//         </div>
//       </div>
//       {filteredData.slice(0, 15).length !== 0 && (
//         <div className="dataResult">
//           {filteredData.map((value, key) => {
//             return (
//               <a className="dataItem" href={value.link} target="_blank">
//                 <p>{value.title}</p>
//               </a>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

//export default SearchBar;
