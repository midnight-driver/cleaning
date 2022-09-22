import * as React from "react";
import { useState } from "react";
import Contenttype from "./components/contenttype";
import Form from "./components/Form";
import Customer from "./components/Customer";
import Quicklinkz from "./components/quickLIMa";
import Work from "./components/Work";
import "./ImageSlider.css";
import "./styles/cartStyle.css";
import Images from "./images";
import FooterPage from "./components/FooterPage";
import FaqMain from "./faqSections/faqMain";
 
import ServiceType from "./components/ServiceType";
function Secondpart(props) {
  const [value, setValue] = useState(0);

  const moveBehind = () => {
    value === -100 * (Images.length - 7) ? setValue(0) : setValue(value - 100);
  };
  const moveAhead = () => {
    console.log(value);
    value === 0 ? setValue(-100 * (Images.length - 7)) : setValue(value + 100);
  };

  return (
    <>
      <p className="pen">Our Professional work</p>

      <div className="glider">
        {Images.map((movie, index) => {
          return (
            <div
              key={index}
              className="glide"
              style={{ transform: `translateX(${value}%)` }}
            >
              <img
                key={movie.id}
                className="poster"
                src={movie.src}
                alt={movie.alt}
              />
            </div>
          );
        })}
      </div>

      <div className="arrows">
        <img src="left.png" onClick={moveBehind} id="moveBehind" alt="left" />
        <img src="right2.png" onClick={moveAhead} id="moveAhead" alt="right" />
      </div>

      <Contenttype />
      <FaqMain />
      <h3 style={{marginLeft:'35%',marginTop:'5%', marginBottom:'2%'}}>Choose our Services</h3>
      <div className="displayfl3">
        <ServiceType
          title="Sofa Deep Cleaning"
          src="Rectangle 2084.png "
          alt="red"
        />
        <ServiceType
          title="Sofa Deep Cleaning"
          src="Rectangle 2085.png "
          alt="red"
        />
        <ServiceType
          title="Sofa Deep Cleaning"
          src="Rectangle 2086.png "
          alt="red"
        />
        <ServiceType
          title="Sofa Deep Cleaning"
          src="Rectangle 2016.png "
          alt="red"
        />
      </div>
      <Work />

      <Customer />
      <Quicklinkz />
      <Form service={props.service} />
      <FooterPage />
    </>
  );
}

export default Secondpart;
