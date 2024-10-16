import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Home() {
  const userData = useSelector((state) => state.userData.userData);
  const navigate = useNavigate();
  useEffect(()=>{
    if(Object.keys(userData).length === 0){
      navigate('/Login');
    }
  },[])
  return (
    <>
      <Navbar selectedPage={'home'}/>
    </>
  )
}
