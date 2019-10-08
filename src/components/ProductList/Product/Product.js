import React from "react";
import classes from "./Product.module.css";

const product = props => {
  return (
    <li className={classes.Product}>
      <div className={classes.ImageContainer}>
        <img src="https://digitalmarketing.blob.core.windows.net/5065/images/items/image11822.jpg" />
      </div>
      <div className={classes.ProductDetails}>
        <a href="#">
          <h2>Bacon, ham and cheese</h2>
        </a>
        <p>
          Bacon ham or cheese consists of your choice of meat to accompany a
          menu item, or a lacarte. Choose from ham sausage or salty and rich
          bacon.
        </p>
        <div className={classes.RestaurantDetails}>
          <p>Test restaurant name</p>{" "}
          <p>
            Restaurant status: <span className={classes.Green}>open</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default product;
