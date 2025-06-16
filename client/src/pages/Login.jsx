import React, { useState } from 'react' 
import '../index.css';
const Login = () => {
    const [isRegistered, setIsRegistered] = useState(true);

    const handleToggle =()=>{
        setIsRegistered(!isRegistered);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(isRegistered){
            console.log('user logging in');
        }else{
            console.log('user signing up');
        }
    }
  return (
    <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
            <h2>{isRegistered ? 'Login Here' : 'Sign Up Here'}</h2>
            
            {!isRegistered &&(
                <input type='text' placeholder='Username'  required/>
            )}
            <input type='email' placeholder='Gmail'  required/>
            <input type='password' placeholder='Password'  required/>
            <button type='submit'>{isRegistered ? 'Login' : 'Sign Up'}</button>
            <p>
                {isRegistered ? "Dont have an account ?" : "Already have an account ?"}{''}
                <span className='loginSpan' onClick={handleToggle}>{isRegistered ? 'Sign Up' : 'Login'}</span>
            </p>
        </form>
    </div>
  )
}

export default Login
