import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  setRedirect = () => {
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    console.log("redireccionar");
    if (this.state.redirect) {
      return <Redirect to={"/product/:" + this.props.product.id} />;
    }
  };

  render() {
    return (
      <Fragment>
        <div className="product-card">
          {this.renderRedirect()}
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/rollingstore-jli.appspot.com/o/products%2F" +
              this.props.product.id +
              ".png?alt=media"
            }
            alt="img"
            className="product-thumb"
            onClick={this.setRedirect}
          />
          <div>producto: {this.props.product.name} </div>
          <div>marca: {this.props.product.brand} </div>
          <div>precio: {this.props.product.price} </div>
        </div>
      </Fragment>
    );
  }
}
