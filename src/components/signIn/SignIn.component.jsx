import React,{useState,Component} from 'react'
import './signIn.style.css'


import FormInput from '../FormInput/FormInput.component'
import CustomButton from '../custombutton/CustomButton.component'
import SignInWithGoogle from '../FairBase/FairBaseUtiles'

class SignIn extends Component{

    constructor(props){
        super(props)

        this.state = {
            email : '',
            passward:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefult()
        this.setState({email:'',passward:''})  
    } 

    handleChange = (event) => {
        const {name,value} = event.traget.value
        this.setState({[value]:name})
    }


    render() {        
        return <div className='signin'>
                <div>
                    <h1 className='title'>I already have an account </h1>
                    <span>Sign in with your email and passward</span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name='email' 
                            type='email' 
                            value={this.state.email} 
                            required
                            label="email"
                            handleChange={this.handleChange}
                            />
                        <FormInput
                            type='passward'
                            name='passward'
                            label='passward'
                            value={this.state.passward}
                            required
                            handleChange={this.handleChange}
                            />
                        <CustomButton type='submit' value='submit form' >Sign IN</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} > Sign With Google </CustomButton>
                    </form>
                </div>
           </div>
}
}

export default SignIn