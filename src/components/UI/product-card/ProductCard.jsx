import React from 'react'

import "../../../Style/product-card.css"

import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const {id, title, image01, price} = props.item
  return (
    <div className="product__item"> 
        <div className="product__img">
            <img src={image01} alt="product-img" className="w-50" />
        </div>

        <div className="product__content">
            <h5><Link to = {`/food/${id}`}>{title}</Link></h5>
            <div>
                <span className="product__price">${price}</span>
                <button className="addTOCart__btn">Add to Cart</button>
            </div>

        </div>
    
    </div>

  )
};
 
export default ProductCard;