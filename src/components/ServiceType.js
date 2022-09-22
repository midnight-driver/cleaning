import React from 'react'

function ServiceType(props) {
    return (
      <div className="serviceBox">
        
        <img className="serviceIm" src={ props.src} alt={props.alt} />
        <p style={{marginBottom:"1%"}}>{props.heading}</p>
      </div>
    );
    
}

export default ServiceType;

