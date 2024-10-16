import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/signUpInput.style.css'
import { isEmail } from 'valiend';
import axios from 'axios';

export default function SignUpInput() {
    const BACKEND_URL = "http://localhost:3000";
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

    const handleClickLogin = ()=>{
        navigate('/login')
    }

    const handleClickSignUp = ()=>{
        if(isEmail(email)){
            if(password === retypePassword){
                const API = `${BACKEND_URL}/user/create`;
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
                            dispatch(
                                setUserData({
                                    id: response.data._id,
                                    email: response.data.email,
                                    password: password,
                                    liveBasket: response.data.liveBasket,
                                })
                            );
                            navigate("/");
                        }
                    })
                    .catch((error) => {
                        if (error.response.status === 409) {
                            setErr("email already exist");
                        }
                    });
            }
            else{
                setErr('passwords dont match')
            }
        }
        else{
            setErr('invalid email')
        }
    }

  return (
    <div className='sign-up-input'>
        <h3>Darhamarket</h3>
        <p>{err}</p>
        <input type="text" value={email} placeholder='Email' onChange={handleChangeEmailInput}/>
        <input type="password" value={password} placeholder='password' onChange={handleChangePasswordInput}/>
        <input type="password" value={retypePassword} placeholder='retype password' onChange={handleChangeRetypePassword}/>
        <button onClick={handleClickSignUp}>Sign Up</button>
        <span className='text'>Already have and Account? <span className='sign-up' onClick={handleClickLogin}>Login</span></span>
      </div>
  )
}
