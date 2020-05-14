import React, { Component } from "react";
import logo from "../logo.png";
import { Layout, Row, Col, Input } from "antd";
import { Redirect } from "react-router-dom";

import ProductCard from "./ProductCard";

const { Header, Footer, Content } = Layout;
const { Search } = Input;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateList = this.props.updateList.bind(this);
  }

  setRedirect = () => {
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    console.log("redireccionar");
    if (this.state.redirect) {
      return <Redirect to="/results" />;
    }
  };

  handleSearch(term) {
    const localTerm = term;
    let currentProducts = [];
    let newProducts = [];

    if (localTerm !== "") {
      currentProducts = this.props.products;
      newProducts = currentProducts.filter((item) => {
        const lc = item.name.toLowerCase();
        const filter = localTerm.toLowerCase();
        return lc.includes(filter);
      });
      this.props.updateList(newProducts, localTerm);
    } else {
      newProducts = this.props.products;
    }

    this.setRedirect();
  }

  handleChange(e) {
    let term = e.target.value;
    this.props.updateTerm(term);
  }

  render() {
    const { userName, products } = this.props;

    return (
      <Layout>
        <Header className="header">
          <Row>
            <Col xs={{ span: 5 }} lg={{ span: 3 }}>
              <img src={logo} className="header-logo" alt="logo" />
            </Col>
            <Col xs={{ span: 19 }} lg={{ span: 16 }}>
              <div className="header-search">
                {this.renderRedirect()}
                <Search
                  placeholder="¿Que queres comprar?"
                  onSearch={() => this.handleSearch(this.props.term)}
                  onChange={this.handleChange}
                  enterButton
                />
              </div>
            </Col>
            <Col xs={{ span: 0 }} lg={{ span: 5 }}>
              <div className="header-greetings">Bienvenido {userName}</div>
            </Col>
          </Row>
        </Header>

        <Content className="content">
          <p> Basado en tu última visita </p>
          <Row>
            {products.map((prod) => (
              <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                <ProductCard key={prod.id} product={prod} />
              </Col>
            ))}
          </Row>
        </Content>

        <Footer className="footer">Footer</Footer>
      </Layout>
    );
  }
}
