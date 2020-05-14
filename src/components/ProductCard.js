import React, { Component, Fragment } from "react";

export default class ProductCard extends Component {
  render() {
    return (
      <Fragment>
        <div className="product-card">
          <div>producto: {this.props.product.name} </div>
          <div>marca: {this.props.product.brand} </div>
          <div>precio: {this.props.product.price} </div>
        </div>
      </Fragment>
    );
  }
}
