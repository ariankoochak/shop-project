import React from 'react'
import { useSelector } from "react-redux";
import '../../assets/styles/product.style.css'
import Navbar from '../../components/Navbar/Navbar';

export default function Product() {
  const openProductData = useSelector((state) => state.openProductData.openProductData);

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
            <button>Add to basket</button>
        </div>
    </div>
    </>
  )
}
