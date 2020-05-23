import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import ProductCard from '../components/ProductCard';
const { Content } = Layout;

export default class Main extends Component {
    render() {
        const { products } = this.props;

        return(
            <Layout>
                <Content className="content">
                    <p> Basado en tu última visita </p>
                    <Row>
                        {
                        products.map(prod => (
                            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                                <ProductCard key={prod.id} product={prod} />
                            </Col>
                        ))
                        }
                    </Row>
                </Content>
             </Layout>
        )
    }
}