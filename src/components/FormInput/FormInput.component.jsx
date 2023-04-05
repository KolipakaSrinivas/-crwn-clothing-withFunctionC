// import './form-input.style.css'
// import React from 'react'

// const FormInput = ({handleChange,label,value,...props}) => {

//     return(
//     <div className="group">
//         <input className='form-input' onChange={handleChange} {...props}/>
//             {
//                 label ? <label className={`${value.length ? 'srink' :''} form-put-label`}>
//                                         {label}
//                               </label> : null
//             }        
//     </div>
//     )
// }

// export default FormInput


import React from 'react';
import './form-input.style.css'

const FormInput = ({handleChange,label,...otherprops}) =>{
    return(
        <div className='group'>
            <input className='form-input'onChange={handleChange} {...otherprops} />
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