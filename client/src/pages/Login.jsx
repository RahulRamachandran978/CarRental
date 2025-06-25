import React, { useState } from 'react' 
import '../index.css';
const Login = () => {
    const [isRegistered, setIsRegistered] = useState(true);
    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleToggle =()=>{
        setIsRegistered(!isRegistered);
        setUsername('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();

        if(!email || !password || (!isRegistered && !username)){
            alert("All fields are required");
            return;
        }
        if(isRegistered){
            console.log("Logging in with", email, password);
        }else{
            try{
                const response = await fetch("http://localhost:5000/api/signup",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body:JSON.stringify({username,email,password})
                });
                const result = await response.json();
                if(result.success){
                    alert(result.message);
                }
            }catch(error){
                console.log('Error signing up:',error)
            }
        }
    }
  return (
    <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
            <h2>{isRegistered ? 'Login Here' : 'Sign Up Here'}</h2>
            
            {!isRegistered &&(
                <input type='text' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}  required/>
            )}
            <input type='email' placeholder='Gmail' value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
            <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
            <button type='submit'>{isRegistered ? 'Login' : 'Sign Up'}</button>
            <p className='mt-2 d-flex gap-2'>
                {isRegistered ? "Dont have an account ?" : "Already have an account ?"}{''}
                <span className='loginSpan' onClick={handleToggle}>{isRegistered ? 'Sign Up' : 'Login'}</span>
            </p>
        </form>
    </div>
  )
}

export default Login
