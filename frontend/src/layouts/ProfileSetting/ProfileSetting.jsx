import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import UserDatas from '../../components/UserDatas/UserDatas';
import '../../assets/styles/profileSetting.style.css'

export default function ProfileSetting() {
  return (
    <>
        <Navbar selectedPage={'profile'}/>
        <div className="user-data-container">
          <UserDatas/>
        </div>
    </>
  )
}
