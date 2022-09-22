import React from "react";
import Secondpart from "./Secondpart";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import "./styles/formStyles.css";
import { useState } from "react";
function App() {
  const [service, setService] = useState("none");
  return (
    <>
      <Header setService={setService} />

      <img src="manclean.png" alt="man cleaning" className="rectangle-frame" />
      <p className="rectangle-label">Home / Delhi NCR / Home Cleaning </p>
      <p className="rectangle-labe">Top House Cleaning Services in Delhi-NCR</p>
      <div className="top-form">
        <Form service={service} />
        
      </div>
      <h2 style={{ paddingTop: " 5rem", paddingLeft: "17rem" }}>
        Home Cleaning Services in Delhi-NCR
      </h2>
      <p
        style={{ color: "#757575", paddingLeft: "21rem", fontFamily: "Roboto" }}
      >
        Get home cleaning services in Delhi NCR, India. We have Well Equipped
        and Trained Team, who carries out Deep House Cleaning and Sanitization
        with Non-Hazardous Chemicals. Book well-trained and experienced team
        from OyeBusy to get your home deep cleaned thoroughly at your chosen
        time and location. We offer the most affordable home cleaning services
        in Delhi NCR, India for studios, apartments, and villas. Book home
        cleaning services on OyeBusy today.
      </p>

      <div className="hrows"></div>
      <Secondpart service={service} />
    </>
  );
}

export default App;
