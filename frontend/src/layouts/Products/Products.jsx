import React from 'react'
import '../../assets/styles/products.style.css'
import { useDispatch } from 'react-redux';
import { setOpenProductData } from "../../utils/store/slices/openProductData";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Products({productsList}) {
  const BACKEND_URL = "http://localhost:3000";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickProduct = (productId)=>{
      const API = `${BACKEND_URL}/product/id/${productId}`;
      axios({
          withCredentials: true,
          method: "get",
          url: API,
      })
          .then((response) => {
              if (response.status === 200) {
                  dispatch(
                      setOpenProductData({
                          id: response.data._id,
                          name: response.data.name,
                          price: response.data.price,
                          category : response.data.category,
                          imageName: response.data.imageName,
                      })
                  );
                  navigate("/product");
              }
          })
          .catch((error) => {
                  console.log(error);
          });
  }

  const renderProducts = ()=>{
    return productsList.map((product)=>{
      return(
        <div className="product" key={product._id} onClick={()=>handleClickProduct(product._id)}>
            <img src={`http://localhost:3000/${product.imageName}.jpg`} alt=""/>
            <span className='name'>{product.name}</span>
            <span className='price'>price : {product.price}T</span>
        </div>)
    })
  }
  return (
    <div className='products-container'>{renderProducts()}</div>
  )
}
