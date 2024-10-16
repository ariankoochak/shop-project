import React from 'react'
import '../../assets/styles/products.style.css'

export default function Products({productsList}) {
  const renderProducts = ()=>{
    return productsList.map((product)=>{
      return(
        <div className="product" key={product._id}>
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
