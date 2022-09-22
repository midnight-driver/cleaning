import React from "react";
import "./../styles/headingStyles.css";
import Quicklink from "./quickLi";
import content from "./../jsonObjects/content2";

function createQuicklink(contentElement, index) {
  return (
    <Quicklink
      key={index}
      title={contentElement.title}
      detailPoints={contentElement.contents}
    />
  );
}
function Quicklinkz() {
  return (
    <section>
      <h2 style={{ letterSpacing: "0.0001rem", marginLeft: "25%" }}>
        Quick Links
      </h2>
      <div className='qContent'>{content.map(createQuicklink)}</div>
    </section>
  );
}

export default Quicklinkz;
