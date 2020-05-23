import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

export default class Success extends Component {
    render() {

        return(
            <Layout>
                <Content className="content">
                    <p> Compra realizada con éxito </p>
                </Content>
            </Layout>
        )
    }
}