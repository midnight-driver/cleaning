import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "What if not answered?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "What if not answered? ",
      content:
        "Amazing service! Really liked it. The electrician was a good person with decent attitude. Satisfactory and thorough service in geyser repair",
    },

    {
      title: "What if not answered? ",
      content: '',
    },
  ],
};

const styles = {
  bgColor: "#F7F7F7",
  fontFamily:'Mulish',
  // titleTextColor: "black",
  rowTitleColor: "black",
  // rowContentColor: 'grey',
  // arrowColor: "red",
  width:'50%'
};



export default function FaqMain(){

    return (
      <div style={{ width: "70%", marginLeft: "20%", marginTop: "8%" }}>
        <h4 style={{ fontFamily: "Montserrat", marginLeft:"14%" }}>
          FAQ's Before Home Cleaning Services In Delhi NCR
        </h4>

        <Faq data={data} styles={styles} style={{paddingLeft:'4%'}} />
      </div>
    );
}