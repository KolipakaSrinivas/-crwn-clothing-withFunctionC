import React from 'react';
import './form-Input-styles.css'

const FormInput = ({sinkButton,label,...otherprops}) =>{
    return(
        <div className='group'>
            <input className='form-input'onChange={sinkButton} {...otherprops} />
            {
                label ? 
                (<label className={`${otherprops.value.length ? 'srink' :'' }form-input-label`}>
                    {label}
                </label>) :null
            }
        </div>
    )
}

export default FormInput