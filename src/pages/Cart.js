import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

export default class Cart extends Component {
    render() {

        return(
            <Layout>
                <Content className="content">
                    <p> Mi carrito </p>
                </Content>
            </Layout>
        )
    }
}