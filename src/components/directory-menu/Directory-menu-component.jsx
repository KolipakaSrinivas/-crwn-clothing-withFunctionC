import React, { Fragment, useState, useEffect } from "react";
import MenuItemsData from "./MenuItems";
import "./Directory-menu-style.css";

import MenuItem from "../menu-item/Menu-item-component";

function Directory() {
  const [MenuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(MenuItemsData);
  });

  return (
    <Fragment>
      <div className="directory-menu">
        {MenuItems.map(({imageUrl,id,size, title}) => {
         return <MenuItem key={id} imageUrl={imageUrl} size={size}  title={title} />;
        })}
      </div>
    </Fragment>
  );
}

export default Directory;
