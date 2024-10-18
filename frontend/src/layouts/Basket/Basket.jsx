import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { updateBasket } from "../../utils/store/slices/userData";
import axios from 'axios';
import '../../assets/styles/basket.style.css'

export default function Basket() {
  const BACKEND_URL = "http://localhost:3000";
  const userData = useSelector((state) => state.userData.userData);
  const dispatch = useDispatch();
  const [basket,setBasket] = useState([]);
  useEffect(()=>{
    const API = `${BACKEND_URL}/user/basket/${userData.email}`;
    axios({
        withCredentials: true,
        method: "get",
        url: API,
    })
        .then((response) => {
            if (response.status === 200) {
              setBasket(response.data)
            }
        })
        .catch((error) => {
            if (error.response.status === 401) {
                setErr("username,email or password is wrong");
            }
        });
  },[userData])

  const addOrRemoveBasketItem = (productId,count) => {
      const API = `${BACKEND_URL}/user/basket/${count > 0 ? "add" : "remove"}`;
      const dataObj = JSON.parse(`{
                "email": "${userData.email}",
                "productId": "${productId}",
                "count": "${count}"
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
              if (response.status === 201) {
                  dispatch(updateBasket(response.data.liveBasket));
              }
          })
          .catch((error) => {
              console.log(error);
          });
  };


  const renderBasketItems = ()=>{
      return basket.map((item)=>{
        return (<div key={item.id} className='basket-item'>
          <div className="image-container">
            <img src={`http://localhost:3000/${item.imageName}.jpg`} alt="" />
          </div>
          <div className="datas-container">
            <div className="product-name">
                <span>{item.name}</span>
            </div>
            <div className="count">
                <span className="change-num-button" onClick={()=>addOrRemoveBasketItem(item.id,-1)}>-</span>
                  <span>{item.count}</span>
                  <span className="change-num-button" onClick={()=>addOrRemoveBasketItem(item.id,1)}>+</span>
            </div>
            <div className="price">
              <span>price : {item.count * Number(item.price)}</span>
            </div>
          </div>
        </div>)
      })
  }
  return (
    <>
      <Navbar selectedPage={'basket'}/>
      <div className="basket-list">
          {renderBasketItems()}
      </div>
      <div className="checkout">
        <button>Checkout</button>
      </div>
    </>
  )
}
