import React from "react";
import './category-item.component.scss';



const CategoryItem = ({ category }) =>{
    console.log(category)
     const {imageUrl , title} = category;
    // debugger
     return(
        <div className="category-container"> 
        <div className="background-image" style={{
          backgroundImage: `url(${imageUrl})` 
        }} /> 
        {/* <img/> */}
        <div className="category-body-container">
          <h2>{title.toUpperCase()}</h2>
          <p>SHOP NOW</p>
        </div>
      </div>
     )
} 
export default CategoryItem;