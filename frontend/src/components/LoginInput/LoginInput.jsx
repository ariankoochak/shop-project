import React, { useState } from 'react'
import '../../assets/styles/loginInput.style.css'
import { useNavigate } from 'react-router-dom';
import {isEmail} from 'valiend'
import axios from 'axios'
import { useDispatch } from "react-redux";
import { setUserData } from '../../utils/store/slices/userData';


export default function LoginInput() {
  const BACKEND_URL = 'http://localhost:3000'
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [err,setErr] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeEmailInput = (e)=>{
    setEmail(e.target.value);
  }

  const handleChangePasswordInput = (e)=>{
    setPassword(e.target.value);
  }

  const handleClickSignUp = ()=>{
    navigate('/sign-up');
  }

  const handleClickLoginButton = ()=>{
    if(isEmail(email)){
        const API = `${BACKEND_URL}/user/auth`;
         const dataObj = JSON.parse(`{
                "email": "${email}",
                "password": "${password}"
          }`);
         axios({
             headers: {
                 "content-type": "application/json",
             },
             withCredentials: true,
             data: dataObj,
             method: "post",
             url: API,
         })
             .then((response) => {
                 if (response.status === 200) {
                    dispatch(setUserData({
                      id : response.data._id,
                      email : response.data.email,
                      password : password,
                      liveBasket : response.data.liveBasket,
                    }))
                    navigate('/')
                 }
             })
             .catch((error) => {
                 if (error.response.status === 401) {
                     setErr("username,email or password is wrong");
                 }
             });
    }
    else{
      setErr('invalid email')
    }
  }
  
  return (
      <div className='login-input'>
        <h3>Darhamarket</h3>
        <p className="error">{err}</p>
        <input type="text" value={email} placeholder='Email' onChange={handleChangeEmailInput}/>
        <input type="password" value={password} placeholder='password' onChange={handleChangePasswordInput}/>
        <button onClick={handleClickLoginButton}>Login</button>
        <span className='text'>Dont have and Account? <span className='sign-up' onClick={handleClickSignUp}>Sign Up</span></span>
      </div>
  );
}
