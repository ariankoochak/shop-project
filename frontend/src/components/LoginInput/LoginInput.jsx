import React, { useState } from 'react'
import '../../assets/styles/loginInput.style.css'
import { useNavigate } from 'react-router-dom';

//TODO: after make API in backend => add authentication and validation datas for login
export default function LoginInput() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleChangeEmailInput = (e)=>{
    setEmail(e.target.value);
  }

  const handleChangePasswordInput = (e)=>{
    setPassword(e.target.value);
  }

  const handleClickSignUp = ()=>{
    navigate('/sign-up');
  }
  
  return (
      <div className='login-input'>
        <h3>Darhamarket</h3>
        <input type="text" value={email} placeholder='Email' onChange={handleChangeEmailInput}/>
        <input type="password" value={password} placeholder='password' onChange={handleChangePasswordInput}/>
        <button>Login</button>
        <span className='text'>Dont have and Account? <span className='sign-up' onClick={handleClickSignUp}>Sign Up</span></span>
      </div>
  );
}
