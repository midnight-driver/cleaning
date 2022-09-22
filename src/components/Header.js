import React from "react";
import HeaderDropDown from "./HeaderDropdown";
import { headerDropDownList } from "../jsonObjects/dropdownListDatas";
import "./../styles/cartStyle.css";
import "./../styles/headingStyles.css";

function Header(props) {
  const { setService } = props;

  return (
    <nav className="navbar">
      <img src="Group 7077.png" className="nav-logo" alt="" />

      <h2 className="headingStyles">CLEANING EXPERT</h2>

      <div className="container2">
        <HeaderDropDown
          name="Pest Control"
          type="heading"
          variant="standard"
          setService={setService}
          list={[]}
        />
        <HeaderDropDown
          name="Home Cleaning"
          type="heading"
          variant="standard"
          setService={setService}
          list={headerDropDownList}
        /></div>
        <p  className="headerCovidDis">
          Covid Disinfection
        </p>
        <p  className="freeQuotes">
          FREE QUOTES
        </p>
        <img src="cart.png" className="cart" alt="cart" />
        <div className="nav-center"></div>
      
    </nav>
  );
}
export default Header;
