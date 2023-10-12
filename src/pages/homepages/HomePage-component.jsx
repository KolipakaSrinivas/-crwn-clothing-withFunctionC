import React, { Fragment } from "react";
import Directory from "../../components/directory-menu/Directory-menu-component";
import './homePage-style.css'

function HomePage() {
  return (
    <Fragment>
      <div className="homepage">
        <Directory/>
      </div>
    </Fragment>
  );
}

export default HomePage;
