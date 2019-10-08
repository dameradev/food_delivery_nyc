import React, { Component } from "react";
import { connect } from "react-redux";
import ProductList from "../../components/ProductList/ProductList";

import * as actions from "../../store/actions/index";

class Main extends Component {
  state = {
    products: [
      {
        _id: "1",
        imgAlt: "delicious ham and cheese",
        imgSrc:
          "https://digitalmarketing.blob.core.windows.net/5065/images/items/image11822.jpg",
        price: "4",
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
          "https://www.handletheheat.com/wp-content/uploads/2019/02/The-Best-Pancake-Recipe-SQUARE.jpg",
        price: "6.45",
        title: "Pancakes",
        description:
          "Pancakes with butter and vanilla are a breakfast item. These fluffy and round pancakes are served hot with butter and vanilla syrup.",
        restaurantName: "Test restaurant name",
        restaurantStatus: "open"
      }
    ]
  };

  componentDidMount() {
    // API call to get the products from the server
    // JUST AN EXAMPLE OF INCLUDING REDUX TO PROJECT
    this.props.onGetProducts();
  }

  render() {
    return (
      <div>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetProducts: () => dispatch(actions.getProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
