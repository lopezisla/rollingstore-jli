import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import ProductCard from '../components/ProductCard';
const { Content } = Layout;

export default class Results extends Component {
    render() {
        const { results } = this.props;

        return(
            <Layout>
                <Content className="content">
                    <p> Resultados la de busqueda </p>
                    <Row>
                        {
                        results.map(resul => (
                            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                                <ProductCard key={resul.id} product={resul} />
                            </Col>
                        ))
                        }
                    </Row>
                </Content>
            </Layout>
        )
    }
}