import React from "react";
function WorkingSteps(props) {
  const titleStyle = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "22px",
    letterSpacing: "0.06em",
    height: "22px",
    color: "#000000",
    marginBottom: "0.5rem",
  };
  const descriptionStyle = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",

    letterSpacing: "0.06em",
    height: "20px",
    color: "#757575",
  };
  return (
    <>
      <div className="displayflx">
        <img
          className="tools"
          src={props.imgUrl}
          alt="band"
          style={{
            width: "58.83px",
            height: "58.83px",
            marginRight: "1.2%",
          }}
        />
        <div
          style={{
            flexDirection: "column",
            lineHeight: ".0001rem",
            marginBottom: "44px",
          }}
        >
          <p style={titleStyle}>{props.title}</p>
          <p style={descriptionStyle}>{props.description}</p>
        </div>
      </div>
    </>
  );
}
function Work() {
  return (
    <section className="functions">
      <h5 style={{ marginLeft: "35%" }}>
        {" "}
        <strong>How it works</strong>
      </h5>
      <WorkingSteps
        title="Choose the Application"
        description="Select the service guide"
        imgUrl="service.png"
      />
      <WorkingSteps
        title="Choose your time-slot"
        description="We serve from 9am - 9pm"
        imgUrl="clock.png"
      />
      <WorkingSteps
        title="Choose from our partners"
        description="Verified Professionals"
        imgUrl="partner.png"
      />
      <WorkingSteps
        title="Hassle-free service"
        description="24*7, verified professionals"
        imgUrl="verified.png"
      />
    </section>
  );
}

export default Work;
