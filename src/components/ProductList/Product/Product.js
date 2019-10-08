import React from "react";
import classes from "./Product.module.css";

const product = props => {
  return (
    <li className={classes.Product}>
      <div className={classes.ImageContainer}>
        <img src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <div className={classes.ProductDetails}>
        <a href="#">
          <h2>{props.title}</h2>
        </a>
        <p>{props.description}</p>
        <div className={classes.RestaurantDetails}>
          <p>{props.restaurantName}</p>
          <p>
            Restaurant status:{" "}
            <span className={classes.Green}>{props.restaurantStatus}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default product;
