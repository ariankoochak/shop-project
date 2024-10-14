import React from 'react'
import '../../assets/styles/loginInput.style.css'

export default function LoginInput() {
  return (
      <div className='login-input'>
        <h3>Darhamarket</h3>
        <input type="text" />
        <input type="password" />
        <button>Login</button>
        <span className='text'>Dont have and Account? <span className='sign-up'>Sign Up</span></span>
      </div>
  );
}
