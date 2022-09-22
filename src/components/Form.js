import React from "react";
import "./../styles/formStyles.css";
import TextField from "@mui/material/TextField";
import FormDropDown from "./FormDropDown";
import Button from "@mui/material/Button";
import { titleList, selectionOptions } from "../jsonObjects/dropdownListDatas";

function Form(props) {
  const { service } = props;

  const handleSubmit = (e) => {
    alert("Your Request Has been approved");

    e.preventDefault();
  };
  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
let ddLabel,list;
if (!titleList.hasOwnProperty(service)) {
ddLabel = titleList["none"];
list = selectionOptions["none"];
}
else{

  ddLabel = titleList[service];
  list=selectionOptions[service];
}
  return (
    <div className="form-box">
      <form
        className="form-class"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormDropDown
          className="drop"
          type="form"
          name={ddLabel}
          variant="outlined"
          list={list}
        />
        <div>
          <TextField
            id="outlined-basic"
            label="Enter Name"
            variant="outlined"
            className="textfield-style"
          />
          <TextField
            id="outlined-basic2"
            inputProps={{ step: "1", min: "0.00" }}
            type="number"
            onKeyDown={blockInvalidChar}
            label="Phone Number"
            variant="outlined"
          />
        </div>
        <TextField
          id="outlined-basic3"
          label="Pincode or Address"
          variant="outlined"
        />
        <div className="buttonClass">
          <Button className="sub" variant="contained" type="submit">
            Submit
          </Button>
        </div>
        <p className="formText">
          Average call back time : 12 min (Last update 5 mins ago)
        </p>
      </form>
    </div>
  );
}
export default Form;
