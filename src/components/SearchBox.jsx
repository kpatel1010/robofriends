import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <input
      type="search"
      placeholder="Search Robots"
      className="pa3 ba b--green bg-lightest-blue ma3 tc"
      onChange={searchChange}
    />
  );
};

export default SearchBox;
