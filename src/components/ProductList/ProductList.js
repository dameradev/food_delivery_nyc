import React from "react";

import Product from "./Product/Product";
import classes from "./ProductList.module.css";

const productList = props => {
  return (
    <ul className={classes.ProductList}>
      <Product />
    </ul>
  );
};
export default productList;
