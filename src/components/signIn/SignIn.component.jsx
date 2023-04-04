import React,{useState} from 'react'
import './signIn.style.css'


import FormInput from '../FormInput/FormInput.component'

function SignIn() {

    const [email,setEmail] = useState('')
    const [passward,setPassward] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefult()
        console.log('ss')

    }

    const handleChange = (e) => {
        setEmail(e.traget.value)
        setPassward(e.traget.value)

    }

    console.log(email)
    console.log(passward)

    return <div className='sign-in'>
                <div>
                    <h1>I already have an account </h1>
                    <span>Sign in with your email and passward</span>
                    <FormInput onSubmit={handleSubmit} handleChange={handleChange}>
                        <input 
                            name='email' 
                            type='email' 
                            value={email} 
                            required
                            onChange={handleChange}
                        />
                        <label>Email</label>
                        <FormInput 
                            type='passward'
                            name='passward'
                            value={passward}
                            required
                            onChange={handleChange}
                        />
                        <label>Passward</label>
                        <input type='submit' value='submit form' />
                    </FormInput>
                </div>
           </div>
}

export default SignIn