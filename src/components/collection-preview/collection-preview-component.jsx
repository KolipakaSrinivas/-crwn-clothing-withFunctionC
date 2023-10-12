import React from "react";
import "./collection-preview.style.css";
import CollectionItem from "../collection-item/Collection-item-component";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.filter((ite,index)=>index < 4).map((item) => {
          return <CollectionItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default CollectionPreview;
