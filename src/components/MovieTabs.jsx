import React from "react";

const MovieTabs = (props) => {
  const { sort_by, updateSortBy } = props;
  const handleClick = (value) => {
    return (event) => {
      updateSortBy(value);
    };
  };
  const getClassLink = (value) => {
    return `nav-link ${sort_by === value ? "active" : ""}`;
  };
  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getClassLink("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassLink("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
          Revenue
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassLink("vote_avetage.desc")}
          oonClick={handleClick("vote_avetage.desc")}
        >
          Vote avetage
        </div>
      </li>
    </ul>
  );
};
export default MovieTabs;
