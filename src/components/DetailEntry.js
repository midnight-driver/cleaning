import React from 'react'

function list(element, index){
    return <li key={index}> {element}
        </li>;
}

function DetailEntry(props) {
    const listpoint=props.detailPoints;
    return (
      <div>
        <p className="lab2">{props.title}</p>
<hr />
        <ol className="mul">

            {listpoint.map(list)}
       
        </ol>
        
      </div>
    );
}

export default DetailEntry
