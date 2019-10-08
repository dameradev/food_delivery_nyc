import React from "react";

import Product from "./Product/Product";
import classes from "./ProductList.module.css";

const productList = props => {
  console.log(props.products);
  const productList = props.products.map(product => (
    <Product
      key={product._id}
      imgSrc={product.imgSrc}
      imgAlt={product.imgAlt}
      title={product.title}
      description={product.description}
      restaurantName={product.restaurantName}
      restaurantStatus={product.restaurantStatus}
    />
  ));
  return <ul className={classes.ProductList}>{productList}</ul>;
};
export default productList;
