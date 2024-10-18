import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import '../../assets/styles/product.style.css'
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { updateBasket } from '../../utils/store/slices/userData';

export default function Product() {
  const BACKEND_URL = "http://localhost:3000";
  const openProductData = useSelector((state) => state.openProductData.openProductData);
  const userData = useSelector((state) => state.userData.userData);
  const dispatch = useDispatch();
  const addOrRemoveBasketItem = (count)=>{
    const API = `${BACKEND_URL}/user/basket/${count > 0 ? 'add' : 'remove'}`;
         const dataObj = JSON.parse(`{
                "email": "${userData.email}",
                "productId": "${openProductData.id}",
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
                    dispatch(updateBasket(response.data.liveBasket))
                 }
             })
             .catch((error) => {
                console.log(error);
             });

  }
  const renderAddToBasketButton = ()=>{
    let countInBasket = 0;
    for(const product of userData.liveBasket){
        if(product[0] === openProductData.id){
            countInBasket = product[1]
        }
    }
    if(countInBasket > 0 ){
        return (
            <div>
                <span className="change-num-button" onClick={()=>addOrRemoveBasketItem(-1)}>-</span>
                <span>{countInBasket}</span>
                <span className="change-num-button" onClick={()=>addOrRemoveBasketItem(1)}>+</span>
                <span>available in basket</span>
            </div>
        );
    }else{
        return <button onClick={()=>addOrRemoveBasketItem(1)}>Add to basket</button>;
    }
  }
  return (
    <>
    <Navbar selectedPage={'categories'}/>
    <div className='product-container'>
        <div className="image-container">
            <img src={`http://localhost:3000/${openProductData.imageName}.jpg`} alt="computer" />
        </div>
        <div className="product-data">
            <h2>{openProductData.name}</h2>
            <h3>price : {openProductData.price}</h3>
            {renderAddToBasketButton()}
        </div>
    </div>
    </>
  )
}
