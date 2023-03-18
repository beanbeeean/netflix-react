import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch } from "react-redux";
import { StoreContext } from "../ThemeContext";
function valuetext(value) {
  return `${value}`;
}

export default function FilterScore() {
  let { voteGte, voteLte } = React.useContext(StoreContext);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState([voteGte[0], voteLte[0]]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    voteGte[1](newValue[0]);
    voteLte[1](newValue[1]);
  };

  const handleDispatch = () => {
    dispatch({
      type: "GET_VOTE_SCORE_SUCCESS",
      payload: { vote_gte: value[0], vote_lte: value[1] },
    });
  };
  return (
    <div>
      <h2>FILTER SCORE</h2>
      <h3>
        {voteGte[0]} ~ {voteLte[0]}
      </h3>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Year range"}
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleDispatch}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={1}
          max={10}
          disableSwap
        />
      </Box>
    </div>
  );
}
