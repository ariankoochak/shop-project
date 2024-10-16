import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/signUpInput.style.css'

//TODO: after make API in backend => add authentication and validation datas for sign up
export default function SignUpInput() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err,setErr] = useState("")
    const [retypePassword,setRetypePassword] = useState("");
    const navigate = useNavigate();

    const handleChangeEmailInput = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const handleChangeRetypePassword = (e)=>{
        setRetypePassword(e.target.value);
    }

    const handleClickSignUp = ()=>{
        navigate('/login')
    }

  return (
    <div className='sign-up-input'>
        <h3>Darhamarket</h3>
        <p>{err}</p>
        <input type="text" value={email} placeholder='Email' onChange={handleChangeEmailInput}/>
        <input type="password" value={password} placeholder='password' onChange={handleChangePasswordInput}/>
        <input type="password" value={retypePassword} placeholder='retype password' onChange={handleChangeRetypePassword}/>
        <button>Sign Up</button>
        <span className='text'>Already have and Account? <span className='sign-up' onClick={handleClickSignUp}>Sign Up</span></span>
      </div>
  )
}
