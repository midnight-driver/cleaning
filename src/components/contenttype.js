import React from "react";
import "./../styles/headingStyles.css";
import DetailEntry from "./DetailEntry";
import content from "./../jsonObjects/content"

function createDetailEntry(contentElement,index){
    return  <DetailEntry key={index} title={contentElement.title} detailPoints={contentElement.points}/>
}
function Contenttype() {
  return (
    <article className="rectang">
      <section>
        <p className="lab">Top 10 House Cleaning Service in Delhi NCR</p>
      
{content.map(createDetailEntry)}
    
      </section>
    </article>
  );
}

export default Contenttype;
