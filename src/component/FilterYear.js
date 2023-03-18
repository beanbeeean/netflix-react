import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch } from "react-redux";
import { StoreContext } from "../ThemeContext";
function valuetext(value) {
  return `${value}`;
}

export default function FilterYear() {
  let { dateGte, dateLte } = React.useContext(StoreContext);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState([dateGte[0], dateLte[0]]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dateGte[1](newValue[0]);
    dateLte[1](newValue[1]);
  };

  const handleDispatch = () => {
    dispatch({
      type: "GET_RELEASE_DATE_SUCCESS",
      payload: { date_gte: value[0], date_lte: value[1] },
    });
  };
  return (
    <div>
      <h2>FILTER YEAR</h2>
      <h3>
        {dateGte[0]} ~ {dateLte[0]}
      </h3>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Year range"}
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleDispatch}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={1990}
          max={2023}
          disableSwap
        />
      </Box>
    </div>
  );
}
