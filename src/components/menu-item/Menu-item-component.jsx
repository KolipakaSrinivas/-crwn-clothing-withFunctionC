import React from "react";
import "./menu-item-styles.css";

function MenuItem({title,imageUrl,size}) {

  return (
    <div className={`menu-item ${size}`}>
      <div  style={{backgroundImage: `url(${imageUrl})`}} className="background-img"/>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
}

export default MenuItem;
