import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";

class Main extends Component {
  state = {
    products: [
      {
        _id: "1",
        imgAlt: "delicious ham and cheese",
        imgSrc:
          "https://digitalmarketing.blob.core.windows.net/5065/images/items/image11822.jpg",
        title: "Bacon, ham and cheese",
        description:
          "Bacon ham or cheese consists of your choice of meat to accompany a menu item, or a lacarte. Choose from ham sausage or salty and rich bacon.",
        restaurantName: "Test restaurant name",
        restaurantStatus: "open"
      },
      {
        _id: "2",
        imgAlt: "delicious ham and cheese",
        imgSrc:
          "https://digitalmarketing.blob.core.windows.net/5065/images/items/image11822.jpg",
        title: "Bacon, ham and cheese",
        description:
          "Bacon ham or cheese consists of your choice of meat to accompany a menu item, or a lacarte. Choose from ham sausage or salty and rich bacon.",
        restaurantName: "Test restaurant name",
        restaurantStatus: "open"
      }
    ]
  };
  render() {
    return (
      <div>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default Main;
