import React from 'react'
import '../../assets/styles/categoryCard.style.css'

export default function CategoryCard({categoryName , categoryImageSrc}) {

  return (
    <div className='category-card' style={{backgroundImage : `url(${categoryImageSrc})`}}>
        <div className="title">
            <h3>{categoryName}</h3>
        </div>
    </div>
  )
}
