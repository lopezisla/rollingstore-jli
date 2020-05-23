import React, { Component } from "react";
import logo from "../logo.png";
import { Layout, Row, Col, Input } from "antd";
import { Redirect } from "react-router-dom";
const { Header } = Layout;
const { Search } = Input;

export default class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToResults: false,
      redirectToMain: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateList = this.props.updateList.bind(this);
    this.saludar = this.props.saludar.bind(this);
  }

  setRedirectToMain = () => {
    this.setState({
      redirectToMain: true,
      redirectToResults: false,
    });
  };

  renderRedirectToMain = () => {
    if (this.state.redirectToMain) {
      return <Redirect to="/" />;
    }
  };

  setRedirectToResults = () => {
    this.setState({
      redirectToResults: true,
      redirectToMain: false,
    });
  };

  renderRedirectToResults = () => {
    if (this.state.redirectToResults) {
      return <Redirect to="/results" />;
    }
  };

  handleChange(e) {
    let term = e.target.value;
    this.props.updateTerm(term);
  }

  handleClearTerm() {
    this.props.updateTerm("");
  }

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

    this.setRedirectToResults();
  }

  render() {
    const { username } = this.props;

    return (
      <Header className="header">
        <Row>
          <Col xs={{ span: 5 }} lg={{ span: 3 }}>
            {this.renderRedirectToMain()}
            <img
              src={logo}
              className="header-logo"
              alt="logo"
              onClick={this.setRedirectToMain}
            />
          </Col>
          <Col xs={{ span: 19 }} lg={{ span: 16 }}>
            <div className="header-search">
              {this.renderRedirectToResults()}
              <Search
                placeholder="¿Que deseas comprar?"
                onSearch={() => this.handleSearch(this.props.term)}
                onChange={this.handleChange}
                value={this.props.term}
                enterButton
              />
              {this.props.term !== "" ? (
                <div
                  className={"clear-icon"}
                  onClick={() => this.handleClearTerm()}
                >
                  x
                </div>
              ) : (
                <div />
              )}
            </div>
          </Col>
          <Col xs={{ span: 0 }} lg={{ span: 5 }}>
            <div className="header-greetings">Bienvenido {username}</div>
          </Col>
        </Row>
      </Header>
    );
  }
}
