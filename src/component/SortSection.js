import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { movieListAction } from "../redux/actions/movieListAction";

const SortSection = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const { sortType, date_gte, date_lte, loading } = useSelector(
    (state) => state.list
  );

  const handleChange = (event) => {
    setSort(event.target.value);
    dispatch({
      type: "GET_SORT_TYPE_SUCCESS",
      payload: { sortType: event.target.value },
    });
    // dispatch(
    //   movieListAction.getFilteredMovieList(sortType, date_gte, date_lte)
    // );
  };

  return (
    <div>
      <FormControl className="sort-form" sx={{ m: 1, minWidth: 160 }}>
        <InputLabel
          className="sort-form"
          id="demo-simple-select-autowidth-label"
        >
          Sort
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sort}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value={"popularity.desc"}>Popularity(Desc)</MenuItem>
          <MenuItem value={"popularity.asc"}>Popularity(Asc)</MenuItem>
          <MenuItem value={"release_date.desc"}>Release Day(Desc)</MenuItem>
          <MenuItem value={"release_date.asc"}>Release Day(Asc)</MenuItem>
          <MenuItem value={"vote_average.desc"}>Vote(Desc)</MenuItem>
          <MenuItem value={"vote_average.asc"}>Vote(Asc)</MenuItem>
          <MenuItem value={"revenue.desc"}>Revenue(Desc)</MenuItem>
          <MenuItem value={"revenue.asc"}>Revenue(Asc)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortSection;
