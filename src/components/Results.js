import React, { Component } from 'react';
import logo from '../logo.png';
import { Layout, Row, Col, Input } from 'antd';
import { Redirect } from 'react-router-dom'

import ProductCard from './ProductCard';

const { Header, Footer, Content } = Layout;
const { Search } = Input;


export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    setRedirect = () => {
        this.setState({ redirect: true })
    }

    renderRedirect = () => {
        console.log("redireccionar")
        if (this.state.redirect) {
           return <Redirect to='/' />
        }
    }

    render() {
        const { userName, results, term } = this.props;

        return(
            <Layout>
                <Header className="header">
                    <Row>
                        <Col xs={{ span: 5 }} lg={{ span: 3 }}>
                            {this.renderRedirect()}
                            <img src={logo} className="header-logo" alt="logo" onClick={this.setRedirect} />
                        </Col>
                        <Col xs={{ span: 19 }} lg={{ span: 16 }}>
                            <div className="header-search">
                                <Search
                                    placeholder={term}
                                    onSearch={value => console.log(value)}
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
                    <p> Resultados la de busqueda </p>
                    <Row>
                        {
                            results.map(resul => (
                                <Col xs={{ span: 24 }} lg={{ span: 24 }}>
                                    <ProductCard key={resul.id} product={resul} />
                                </Col>
                            ))
                        }
                    </Row>
                </Content>
 
                <Footer className="footer">
                    Footer
                </Footer>
            </Layout>
        )
    }
}