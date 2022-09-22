// import React from 'react'

// function Quicklink() {
//     return (
//       <section>
//         
//         </h2>
//         <h5 style={{ letterSpacing: "0.0001rem", marginLeft: "15%" }}>
//           Serving in
//         </h5>
//         <div>
//           <p className="q-Content">
//             Ludhiana • Kochi • Kanpur • Agra • Bhopal • Guwahati • Vijayawada •
//             Varanasi • Coimbatore • Thiruvananthapuram • Patna • Raipur • Nashik
//             • Jabalpur • Jamshedpur • Dehradun • Meerut • Ranchi • Prayagraj •
//             Amritsar • Gwalior • Kota • Aurangabad • Mysore • Guntur • Cuttack •
//             Udaipur • Ahmedabad • Bangalore • Chennai • Delhi NCR • Chandigarh
//             Tricity • Jaipur • Hyderabad • Kolkata • Mumbai • Pune • Nagpur •
//             Visakhapatnam • Vadodara • Lucknow • Bhubaneswar • Surat • Indore •
//             Rajahmundry • Madurai • Jodhpur • Kakinada • Warangal • Sonipat •
//             Panipat • Karnal • Rohtak • Alwar{" "}
//           </p>
//         </div>
//       </section>
//     );
// }

// export default Quicklink;
import React from "react";

function list(element,index) {
  return <li key={index}> {element}</li>;
}

function Quicklink(props) {
  const listpoint = props.detailPoints;
  return (
    <div>
      <h5 style={{ letterSpacing: "0.0001rem"}}>
        {props.title}
      </h5>
      
      <p className="qcontent">{listpoint.map(list)}</p>
    </div>
  );
}

export default Quicklink;

