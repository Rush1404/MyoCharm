import React from 'react';
import './product.css';
<meta></meta>
const Product = ({ imgUrl, date, text }) => (
  <div className="store-container_product">
    <div className="store-container_product-image">
      <img src={imgUrl} alt="product_image" />
    </div>
    <div className="store-container_product-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>More Information</p>
    </div>
  </div>
);

export default Product;