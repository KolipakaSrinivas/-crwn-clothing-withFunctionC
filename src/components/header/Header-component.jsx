import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.css'
import Logo from '../../../public/assets/crown.svg'

function Header({currentUser,userSignOut}) {
  return (
    <div className='header'>
        <Link to={"/"} className='logo-container'>
            <img src={Logo} alt="" className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to={"/shop"}>
                Shop
            </Link>
            {
                currentUser ? 
                    <div className='option' onClick={()=> userSignOut()}>
                        SIGN OUT
                    </div>:
                    <Link className='option' to={"/signin"}>
                            SIGN IN
                    </Link>
            }
        </div>

    </div>
  )
}

export default Header