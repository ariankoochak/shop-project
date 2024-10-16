import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import '../../assets/styles/userDatas.style.css'
import { setUserData } from '../../utils/store/slices/userData';
import axios from 'axios';

export default function UserDatas() {
const BACKEND_URL = "http://localhost:3000";
  const userData = useSelector((state) => state.userData.userData);
  const [password,setPassword] = useState('');  
  const dispatch = useDispatch();

  useEffect(() => {
      setPassword(userData.password);
  }, [userData]);
  const handleChangePasswordInput = (e)=>{
    setPassword(e.target.value)
  }

  const handleClickChangePassword = ()=>{
    const API = `${BACKEND_URL}/user/reset-pass`;
    const dataObj = JSON.parse(`{
                "email": "${userData.email}",
                "oldPassword": "${userData.password}",
                "newPassword": "${password}"
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
            console.log(response);
            if (response.status === 201) {
                dispatch(
                    setUserData({
                        id: response.data._id,
                        email: response.data.email,
                        password: password,
                        liveBasket: response.data.liveBasket,
                    })
                );
            }
        })
        .catch((error) => {
            if (error.response.status === 400) {
                console.log(error);
            }
        });
  }
  return (
      <div className="user-datas">
          <span>Email : {userData.email}</span>
          <input
              type="text"
              value={password}
              onChange={handleChangePasswordInput}
          />
          <button onClick={handleClickChangePassword}>Change Password</button>
      </div>
  );
}
