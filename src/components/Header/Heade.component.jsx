import { Link } from "react-router-dom";
import React from 'react'
// import { ReactComponent as Logo} from "../../assets/rown.svg";

import './header.style.component.css'



function Header() {
    return <div className="header">
                 <Link to='/' className="className='logo-container'">
                {/* <Logo className='logo'/> */}
                </Link>
             <div className="options">
                <Link className="option" to='/shop'>Shop</Link>
                <Link  className="option" to='/sign'>Counts</Link>
             </div>
           </div>
}

export default Header