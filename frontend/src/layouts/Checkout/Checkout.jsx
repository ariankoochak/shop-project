import React, { useEffect } from 'react'
import '../../assets/styles/checkout.style.css'
import { useDispatch } from 'react-redux';
import { updateBasket } from '../../utils/store/slices/userData';
import { useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const userData = useSelector((state) => state.userData.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
  const BACKEND_URL = "http://localhost:3000";
    const API = `${BACKEND_URL}/user/basket/${userData.email}`;
    axios({
        withCredentials: true,
        method: "delete",
        url: API,
    })
        .then((response) => {
            if (response.status === 201) {
                dispatch(updateBasket([]));
            }
        })
        .catch((error) => {
            console.log(error);
        });
  })

  const handleClickBackToHomePageButton = ()=>{
    navigate('/')
  }
  return (
      <div className='checkout-page'>
          <h1>Your purchase was successful!</h1>
          <h3 onClick={handleClickBackToHomePageButton}>back to Home Page</h3>
      </div>
  );
}
