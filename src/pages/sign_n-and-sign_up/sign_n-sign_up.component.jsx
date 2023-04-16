import SignIn from '../../components/signIn/SignIn.component'

import SignUp from '../../components/sign-up/Sign-up.component'

import './sign-in-up.css';

function SignInAndSingUp() {
    return <div className='sign-in-and-sign-up'>
             <SignIn/>
             <SignUp/>

           </div>
}

export default SignInAndSingUp