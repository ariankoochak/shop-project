import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../Products/Products'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import cpuImageSrc from '../../assets/images/cpu.jpg'
import gpuImageSrc from "../../assets/images/graphicCard.jpg";
import caseImageSrc from "../../assets/images/case.jpg";
import motherboardImageSrc from "../../assets/images/motherboard.jpg";
import '../../assets/styles/categories.style.css';
import axios from 'axios'


export default function Categories() {
    const BACKEND_URL = "http://localhost:3000";
    const [products,setProducts] = useState([]);
    const handleClickCategoryCard = (category)=>{
        const API = `${BACKEND_URL}/product/category/${category}`;
        axios({
            withCredentials: true,
            method: "get",
            url: API,
        })
            .then((response) => {
                if (response.status === 200) {
                    setProducts(response.data)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
  return (
      <div className="categories">
          <Navbar selectedPage={"categories"} />
              <div className="category-cards-container">
                  <span onClick={() => handleClickCategoryCard("CPU")}>
                      <CategoryCard
                          categoryName={"Cpu"}
                          categoryImageSrc={cpuImageSrc}
                      />
                  </span>
                  <span onClick={() => handleClickCategoryCard("GPU")}>
                      <CategoryCard
                          categoryName={"Graphic Card"}
                          categoryImageSrc={gpuImageSrc}
                      />
                  </span>
                  <span onClick={() => handleClickCategoryCard("Case")}>
                      <CategoryCard
                          categoryName={"Case"}
                          categoryImageSrc={caseImageSrc}
                      />
                  </span>
                  <span onClick={() => handleClickCategoryCard("Motherboard")}>
                      <CategoryCard
                          categoryName={"Motherboard"}
                          categoryImageSrc={motherboardImageSrc}
                      />
                  </span>
              </div>
          {products.length > 0 && <Products productsList = {products}/>}
      </div>
  );
}
