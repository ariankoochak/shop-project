import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import cpuImageSrc from '../../assets/images/cpu.jpg'
import gpuImageSrc from "../../assets/images/graphicCard.jpg";
import caseImageSrc from "../../assets/images/case.jpg";
import motherboardImageSrc from "../../assets/images/motherboard.jpg";
import '../../assets/styles/categories.style.css'


export default function Categories() {
  return (
      <div className="categories">
          <Navbar selectedPage={"categories"} />
          <div className="category-cards-container">
              <CategoryCard categoryName={"Cpu"} categoryImageSrc={cpuImageSrc} />
              <CategoryCard categoryName={"Graphic Card"} categoryImageSrc={gpuImageSrc} />
              <CategoryCard categoryName={"Case"} categoryImageSrc={caseImageSrc} />
              <CategoryCard categoryName={"Motherboard"} categoryImageSrc={motherboardImageSrc} />
          </div>
      </div>
  );
}
