import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

export default class Product extends Component {
    render() {

        return(
            <Layout>
                <Content className="content">
                    <p> Información del producto </p>
                </Content>
            </Layout>
        )
    }
}