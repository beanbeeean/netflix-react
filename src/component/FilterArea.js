import React from "react";
import FilterGenre from "./FilterGenre";
import FilterScore from "./FilterScore";
import FilterYear from "./FilterYear";
import SortSection from "./SortSection";

const FilterArea = () => {
  return (
    <div>
      <SortSection />
      <FilterYear />
      <FilterScore />
      <FilterGenre />
    </div>
  );
};

export default FilterArea;
