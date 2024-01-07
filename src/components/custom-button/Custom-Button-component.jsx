import React from 'react'
import './custom-button.styles.css'

function CustomButton({children,isGoogleSignIn,...otherprops}) {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' :''} custom-button `} {...otherprops}>
        {children}
    </button>
  )
}

export default CustomButton