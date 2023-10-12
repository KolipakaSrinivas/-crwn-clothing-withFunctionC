import React from 'react';
import { Fragment } from 'react';
import './Form-Input-styles.css'

function FormInput({handleChange,label,...otherprops}) {
    return (
        <Fragment>
            <div className='group'>
                <input className='form-input' onChange={handleChange} {...otherprops} />
                {
                    label ? (<label className={`${otherprops.value.length ? 'shrink':''} form-input-label `}></label>) : null
                }
            </div>
        </Fragment>
    )
}

export default  FormInput