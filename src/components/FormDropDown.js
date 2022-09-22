import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./../styles/headingStyles.css";

function FormDropDown(props) {
 
  const list = props.list;

  const [option, setOption] = React.useState("");
  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <FormControl variant={props.variant} sx={{ m: 1, minWidth: 200 }}>
      <InputLabel
        id="demo-simple-select-standard-label"
        className="dropdownLabel"
      >
        {props.name}
      </InputLabel>
      <Select
        labelId="select label"
        id="select id"
        value={option}
        onChange={handleChange}
        className="dropdownLabel"
        label="option"
      >
        {list.map((optionFromList, index) => {
          return (
            <MenuItem
              key={index}
              className="dropdownLabel"
              value={optionFromList.value}
            >
              {optionFromList.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default FormDropDown;
