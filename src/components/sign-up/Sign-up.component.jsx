

import FormInput from "../FormInput/FormInput.component"
import CustomButton from "../custombutton/CustomButton.component"


import './sign-up.css'

function SignUp() {
    return(
        <div className="sign-up">
            <h1 className="title">I do have an account</h1>
            <span>sign up with your email and password </span>
            <form className="sign-up-form">
                <FormInput 
                    type='text'
                    value=''
                    name = 'displayname' 
                    required 
                    label='name'
                />
                <FormInput
                    type='email'
                    value=''
                    label = ''
                    required 
                />

                <FormInput
                    type='password'
                    value=''
                    name='password'
                    required
                    label = 'password'
                
                />
                <FormInput
                    type='password'
                    value=''
                    name='password'
                    required
                    label = 'comform password'
                
                />

                <CustomButton onClick='submit'>Sign UP</CustomButton>
            </form>

        </div>
    )
}

export default SignUp