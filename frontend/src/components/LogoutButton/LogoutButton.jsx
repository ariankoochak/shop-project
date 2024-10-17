import React from 'react'
import { useDispatch } from 'react-redux'
import { resetUserData } from '../../utils/store/slices/userData';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/logoutButton.style.css'

export default function LogoutButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClickLogoutBtn = ()=>{
        dispatch(resetUserData());
        navigate('/login');
    }
  return (
    <button className='logout-button' onClick={handleClickLogoutBtn}>Log out</button>
  )
}
