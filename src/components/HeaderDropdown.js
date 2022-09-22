import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./../styles/headingStyles.css";

function HeaderDropDown(props) {
  const { setService } = props;
  const [option, setOption] = React.useState("");
  const optionList = props.list;
  const handleChange = (event) => {
    setOption(event.target.value);
    setService(event.target.value);
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
        {optionList.map((optionFromList, index) => {
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

export default HeaderDropDown;
