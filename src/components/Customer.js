import React from "react";
import Datas from "./../jsonObjects/reviewData";
function createReview(custom, index) {
  return (
    <div key={index}>
      <div style={{ display: "flex" }} className="container">
        <img className="custI" src={custom.img} alt={custom.img} />
        <p>
          <strong>{custom.name} </strong>
        </p>

        <p
          style={{
            marginTop: "1.2rem",
            fontSize: ".5rem",
            position: " absolute",
            marginLeft: "3.5%",
            color: "grey",
          }}
        >
          {custom.date}c
        </p>
      </div>
      <p style={{ marginLeft: "2%" }}>{custom.content}c</p>
      <hr style={{ width: "40%" }} />
    </div>
  );
}
function Customer() {
  return (
    <article className="customer">
      <div>
        <h2 style={{ letterSpacing: "0.0001rem" }} className="cust">
          Customer Reviews
        </h2>
        <h3 style={{ letterSpacing: "0.0001rem" }}>Avg. user rating</h3>
        <br />
        <h3 style={{ letterSpacing: "0.0001rem" }}>*4.76</h3>
        <h6 style={{ letterSpacing: "0.0001rem" }}>347k Reviews</h6>
        <hr style={{ width: "40%" }} />{" "}
      </div>
      {Datas.map(createReview)}
    </article>
  );
}

export default Customer;
